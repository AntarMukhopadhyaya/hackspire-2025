// Extended Navigator interface for performance monitoring
declare global {
    interface Navigator {
        deviceMemory?: number;
        connection?: {
            effectiveType?: string;
            downlink?: number;
            rtt?: number;
            saveData?: boolean;
        };
    }

    interface Performance {
        memory?: {
            usedJSHeapSize: number;
            totalJSHeapSize: number;
            jsHeapSizeLimit: number;
        };
    }

    interface PerformanceEntry {
        name: string;
        entryType: string;
        startTime: number;
        duration: number;
    }

    interface PerformanceObserver {
        observe(options: { entryTypes: string[] }): void;
        disconnect(): void;
    }

    var PerformanceObserver: {
        prototype: PerformanceObserver;
        new(callback: (list: { getEntries(): PerformanceEntry[] }) => void): PerformanceObserver;
    };
}

export { };