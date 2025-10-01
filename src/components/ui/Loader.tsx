"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center bg-black/70 backdrop-blur-md">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500 via-cyan-400 to-indigo-500 p-[3px]">
          <div className="h-full w-full rounded-full bg-black/90" />
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_0_25px_-5px_rgba(59,130,246,0.8)]" />
        </div>
      </div>
      <p className="mt-6 text-white/80 tracking-wide text-sm">Loading experience...</p>
      <style>{`
        .animate-spin-slow { animation: spin 1.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
