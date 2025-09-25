// Performance optimization utilities
export const PERFORMANCE_CONFIG = {
    // Animation settings
    REDUCED_MOTION: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,

    // Throttle settings
    SCROLL_THROTTLE: 16, // ~60fps
    RESIZE_THROTTLE: 100, // 10fps for resize events
    ANIMATION_THROTTLE: 32, // ~30fps for animations

    // Image optimization
    IMAGE_QUALITY: 85,
    WEBP_SUPPORT: typeof window !== 'undefined' &&
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0,

    // Memory management
    MAX_CONCURRENT_ANIMATIONS: 3,
    CLEANUP_INTERVAL: 5000, // 5 seconds

    // Device detection
    IS_MOBILE: typeof window !== 'undefined' && window.innerWidth < 768,
    IS_LOW_END_DEVICE: typeof window !== 'undefined' &&
        (navigator.hardwareConcurrency <= 2 || (navigator.deviceMemory && navigator.deviceMemory <= 2)),
};

// Throttle function for performance
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function (this: any, ...args: Parameters<T>) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return function (this: any, ...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Intersection Observer for lazy loading
export function createIntersectionObserver(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
): IntersectionObserver | null {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        return null;
    }

    return new IntersectionObserver(callback, {
        rootMargin: '50px',
        threshold: 0.1,
        ...options,
    });
}

// Memory cleanup utility
export function cleanupAnimations() {
    // Cancel any running animations
    const elements = document.querySelectorAll('[data-animation-id]');
    elements.forEach(el => {
        const animationId = el.getAttribute('data-animation-id');
        if (animationId) {
            cancelAnimationFrame(parseInt(animationId));
        }
    });
}

// Performance monitoring
export function measurePerformance(name: string, fn: () => void) {
    if (typeof window === 'undefined' || !window.performance) {
        fn();
        return;
    }

    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
}

// Optimize images based on device capabilities
export function getOptimizedImageUrl(url: string, width?: number, quality?: number): string {
    if (!url) return url;

    const params = new URLSearchParams();

    if (width) {
        params.append('w', width.toString());
    }

    if (quality) {
        params.append('q', quality.toString());
    } else if (PERFORMANCE_CONFIG.IS_LOW_END_DEVICE) {
        params.append('q', '70');
    }

    if (PERFORMANCE_CONFIG.WEBP_SUPPORT) {
        params.append('f', 'webp');
    }

    return params.toString() ? `${url}?${params.toString()}` : url;
}