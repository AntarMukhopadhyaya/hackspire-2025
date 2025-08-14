"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-black/90 group-[.toaster]:text-white group-[.toaster]:border-yellow-400/50 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-sm",
          description: "group-[.toast]:text-gray-300",
          actionButton:
            "group-[.toast]:bg-yellow-400 group-[.toast]:text-black group-[.toast]:hover:bg-yellow-500",
          cancelButton:
            "group-[.toast]:bg-red-500 group-[.toast]:text-white group-[.toast]:hover:bg-red-600",
          success:
            "group-[.toaster]:border-green-400/50 group-[.toaster]:bg-green-900/20",
          error:
            "group-[.toaster]:border-red-400/50 group-[.toaster]:bg-red-900/20",
          warning:
            "group-[.toaster]:border-yellow-400/50 group-[.toaster]:bg-yellow-900/20",
          info: "group-[.toaster]:border-blue-400/50 group-[.toaster]:bg-blue-900/20",
        },
      }}
      style={
        {
          "--normal-bg": "rgba(0, 0, 0, 0.9)",
          "--normal-text": "#ffffff",
          "--normal-border": "rgba(255, 212, 63, 0.5)",
          "--success-bg": "rgba(34, 197, 94, 0.2)",
          "--success-border": "rgba(34, 197, 94, 0.5)",
          "--error-bg": "rgba(239, 68, 68, 0.2)",
          "--error-border": "rgba(239, 68, 68, 0.5)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
