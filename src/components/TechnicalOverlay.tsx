"use client";

import React, { useEffect, useState } from "react";

export function TechnicalOverlay() {
  const [time, setTime] = useState("");
  const [systemData, setSystemData] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    temp: 0,
    power: 0,
    signal: 0,
    latency: 0,
    errors: 0,
    sessionId: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "Asia/Tokyo",
        })
      );
    };

    // Generate dynamic system data
    const updateSystemData = () => {
      setSystemData({
        cpu: Math.floor(Math.random() * 60) + 15, // 15-75%
        memory: Math.floor(Math.random() * 40) + 50, // 50-90%
        network: Math.floor(Math.random() * 300) + 50, // 50-350 KB/s
        temp: Math.floor(Math.random() * 25) + 35, // 35-60°C
        power: Math.floor(Math.random() * 15) + 85, // 85-100%
        signal: Math.floor(Math.random() * 30) + 30, // -30 to -60 dBm
        latency: Math.floor(Math.random() * 100) + 50, // 50-150ms
        errors: Math.floor(Math.random() * 3), // 0-2 errors
        sessionId: Math.random().toString(36).substr(2, 13).toUpperCase(),
      });
    };

    updateTime();
    updateSystemData();

    const timeInterval = setInterval(updateTime, 1000);
    const dataInterval = setInterval(updateSystemData, 3000); // Update every 3 seconds

    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <>
      {/* Top Technical Bar */}
      <div className="absolute top-20 left-0 right-0 z-30 pointer-events-none">
        <div
          className="flex justify-between items-center px-8 py-4 font-mono text-sm border-b border-yellow-400/20 bg-black/20 backdrop-blur-sm"
          style={{ color: "#FCFF3F" }}
        >
          <div className="flex space-x-12">
            <span className="tracking-wider">SYS.STATUS: ONLINE</span>
            <span className="tracking-wider">CONN.TYPE: SECURE_TLS</span>
            <span className="tracking-wider">PROTOCOL: HTTPS/2.0</span>
          </div>
          <div className="flex space-x-12">
            <span className="tracking-wider">JST: {time}</span>
            <span className="tracking-wider">USER.AUTH: GRANTED</span>
            <span className="tracking-wider">
              SESSION: {systemData.sessionId}
            </span>
          </div>
        </div>
      </div>

      {/* Corner Elements */}
      <div className="absolute top-4 left-4 z-40 pointer-events-none">
        <div
          className="w-12 h-12 border-l-2 border-t-2"
          style={{ borderColor: "#FCFF3F" }}
        ></div>
      </div>

      <div className="absolute top-4 right-4 z-40 pointer-events-none">
        <div
          className="w-12 h-12 border-r-2 border-t-2"
          style={{ borderColor: "#FCFF3F" }}
        ></div>
      </div>

      <div className="absolute bottom-4 left-4 z-40 pointer-events-none">
        <div
          className="w-12 h-12 border-l-2 border-b-2"
          style={{ borderColor: "#FCFF3F" }}
        ></div>
      </div>

      <div className="absolute bottom-4 right-4 z-40 pointer-events-none">
        <div
          className="w-12 h-12 border-r-2 border-b-2"
          style={{ borderColor: "#FCFF3F" }}
        ></div>
      </div>

      {/* Floating Data Elements */}
      <div
        className="absolute top-1/4 left-12 z-30 pointer-events-none font-mono text-sm bg-black/30 backdrop-blur-sm p-4 border border-yellow-400/20 rounded"
        style={{ color: "#FCFF3F" }}
      >
        <div className="space-y-2">
          <div className="tracking-wider">CPU: {systemData.cpu}%</div>
          <div className="tracking-wider">MEM: {systemData.memory}%</div>
          <div className="tracking-wider">NET: {systemData.network} KB/s</div>
          <div className="tracking-wider">TEMP: {systemData.temp}°C</div>
        </div>
      </div>

      <div
        className="absolute bottom-1/4 right-12 z-30 pointer-events-none font-mono text-sm bg-black/30 backdrop-blur-sm p-4 border border-yellow-400/20 rounded"
        style={{ color: "#FCFF3F" }}
      >
        <div className="space-y-2 text-right">
          <div className="tracking-wider">PWR: {systemData.power}%</div>
          <div className="tracking-wider">SIG: -{systemData.signal} dBm</div>
          <div className="tracking-wider">LAT: {systemData.latency}ms</div>
          <div className="tracking-wider">ERR: {systemData.errors}</div>
        </div>
      </div>

      {/* Barcode Element */}
      <div className="absolute bottom-20 left-12 z-30 pointer-events-none">
        <div className="flex space-x-1">
          {Array.from({ length: 25 }).map((_, i) => {
            // Create a deterministic pattern based on sessionId for dynamic appearance
            const hash =
              systemData.sessionId.charCodeAt(
                i % systemData.sessionId.length
              ) || 65;
            const isLong = hash % 2 === 0;
            return (
              <div
                key={i}
                className={`${isLong ? "w-1 h-12" : "w-1 h-6"}`}
                style={{ backgroundColor: "#FCFF3F" }}
              ></div>
            );
          })}
        </div>
        <div
          className="font-mono text-sm mt-2 tracking-wider"
          style={{ color: "#FCFF3F" }}
        >
          ID: {systemData.sessionId}
        </div>
      </div>
    </>
  );
}
