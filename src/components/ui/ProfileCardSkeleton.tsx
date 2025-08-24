import React from "react";

const ProfileCardSkeleton: React.FC = () => {
  return (
    <div className="relative h-[400px] aspect-[0.718] bg-gray-800/50 border border-gray-700 animate-pulse">
      {/* Cut corners to match ProfileCard */}
      <div
        className="w-full h-full bg-gradient-to-br from-gray-700/30 to-gray-800/50"
        style={{
          clipPath:
            "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
        }}
      >
        {/* Avatar skeleton */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-600/50 rounded-full animate-pulse" />

        {/* Name skeleton */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-600/50 rounded animate-pulse" />

        {/* Title skeleton */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-600/30 rounded animate-pulse" />

        {/* Status skeleton */}
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-600/30 rounded animate-pulse" />

        {/* Button skeleton */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-yellow-400/20 rounded animate-pulse" />

        {/* Loading text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-mono">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
