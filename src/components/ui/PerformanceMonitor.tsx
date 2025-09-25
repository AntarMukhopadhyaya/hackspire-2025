"use client";
import { useEffect } from "react";

interface PerformanceMonitorProps {
  enabled?: boolean;
}

export default function PerformanceMonitor({
  enabled = process.env.NODE_ENV === "development",
}: PerformanceMonitorProps) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const { name, value } = entry as any;

        // Log performance metrics
        switch (name) {
          case "FCP":
            console.log(`First Contentful Paint: ${value}ms`);
            break;
          case "LCP":
            console.log(`Largest Contentful Paint: ${value}ms`);
            if (value > 2500) {
              console.warn(
                "⚠️ LCP is above 2.5s - consider optimizing images and reducing render-blocking resources"
              );
            }
            break;
          case "FID":
            console.log(`First Input Delay: ${value}ms`);
            if (value > 100) {
              console.warn(
                "⚠️ FID is above 100ms - consider reducing JavaScript execution time"
              );
            }
            break;
          case "CLS":
            console.log(`Cumulative Layout Shift: ${value}`);
            if (value > 0.1) {
              console.warn(
                "⚠️ CLS is above 0.1 - consider adding size attributes to images and avoiding dynamic content insertion"
              );
            }
            break;
        }
      }
    });

    // Observe Web Vitals
    try {
      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
      });
    } catch (e) {
      console.log("Performance Observer not supported");
    }

    // Monitor memory usage
    const checkMemory = () => {
      if ("memory" in performance) {
        const memory = (performance as any).memory;
        const used = Math.round(memory.usedJSHeapSize / 1048576);
        const total = Math.round(memory.totalJSHeapSize / 1048576);
        const limit = Math.round(memory.jsHeapSizeLimit / 1048576);

        console.log(`Memory Usage: ${used}MB / ${total}MB (Limit: ${limit}MB)`);

        if (used / limit > 0.8) {
          console.warn(
            "⚠️ High memory usage detected - consider optimizing components and cleaning up event listeners"
          );
        }
      }
    };

    // Check memory every 30 seconds
    const memoryInterval = setInterval(checkMemory, 30000);

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn(
          `⚠️ Long task detected: ${entry.duration}ms - consider breaking up JavaScript execution`
        );
      }
    });

    try {
      longTaskObserver.observe({ entryTypes: ["longtask"] });
    } catch (e) {
      console.log("Long Task Observer not supported");
    }

    // Cleanup
    return () => {
      observer.disconnect();
      longTaskObserver.disconnect();
      clearInterval(memoryInterval);
    };
  }, [enabled]);

  return null;
}
