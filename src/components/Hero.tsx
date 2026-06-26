"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [demoState, setDemoState] = useState<"idle" | "ingesting" | "analyzing" | "completed">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (demoState === "ingesting") {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDemoState("analyzing");
            return 100;
          }
          return prev + 4;
        });
      }, 50);
    } else if (demoState === "analyzing") {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDemoState("completed");
            return 100;
          }
          return prev + 2;
        });
      }, 60);
    } else if (demoState === "completed") {
      interval = setTimeout(() => {
        setDemoState("idle");
        setProgress(0);
      }, 5000);
    }
    return () => {
      clearInterval(interval);
      if (demoState === "completed") clearTimeout(interval);
    };
  }, [demoState]);

  const handleStartDemo = () => {
    if (demoState === "idle") {
      setDemoState("ingesting");
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden grid-bg">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none radial-mask" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none radial-mask" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-brand-pink/10 rounded-full blur-[90px] pointer-events-none radial-mask" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors mb-6 cursor-pointer group">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">
                AutoFlow 2.0 is live
              </span>
              <svg
                className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="text-gradient">Automate Data Workflows</span>
              <br />
              <span className="text-white">With Agentic AI</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Connect your data sources, extract insights with custom LLM agents, and sync results straight to your production tools. Zero pipeline maintenance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Start Automating Free
              </button>
              <button
                onClick={handleStartDemo}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full font-semibold text-white transition-all flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5 text-brand-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                </svg>
                <span>Interactive Demo</span>
              </button>
            </div>

            {/* Client trust logos */}
            <div className="mt-14 w-full">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Trusted by engineering teams at
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-45">
                <span className="text-lg font-bold text-white tracking-wider">ACME CORP</span>
                <span className="text-lg font-bold text-white tracking-wider">GLOBEX</span>
                <span className="text-lg font-bold text-white tracking-wider">VERTEX</span>
                <span className="text-lg font-bold text-white tracking-wider">KRONOS</span>
              </div>
            </div>
          </div>

          {/* Interactive Automation Mockup */}
          <div className="lg:col-span-6 w-full flex justify-center relative">
            
            {/* Ambient shadow glow */}
            <div className="absolute inset-0 bg-brand-purple/10 blur-3xl rounded-3xl" />

            {/* Main Window */}
            <div className="w-full max-w-lg glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative animate-float">
              
              {/* Header */}
              <div className="px-4 py-3 bg-gray-950/60 border-b border-white/5 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-500 font-mono">live_pipeline_simulation.sh</div>
                <div className="w-4 h-4 rounded bg-white/5" />
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm space-y-6">
                
                {/* Node visualizer */}
                <div className="flex justify-between items-center relative py-4">
                  {/* Connection Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0" />
                  
                  {/* Glowing Signal */}
                  {demoState !== "idle" && (
                    <div
                      className={`absolute top-1/2 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan -translate-y-1/2 z-10 transition-all duration-300 rounded-full`}
                      style={{
                        left: "0%",
                        width:
                          demoState === "ingesting"
                            ? `${progress * 0.5}%`
                            : demoState === "analyzing"
                            ? `${50 + progress * 0.5}%`
                            : "100%",
                      }}
                    />
                  )}

                  {/* Node 1: Ingest */}
                  <div className="relative z-20 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        demoState === "ingesting"
                          ? "bg-brand-purple/20 border-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-110"
                          : demoState === "analyzing" || demoState === "completed"
                          ? "bg-brand-purple border-brand-purple"
                          : "bg-gray-900 border-white/10"
                      }`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <span className="text-[10px] mt-2 text-gray-400 font-semibold">CSV Ingest</span>
                  </div>

                  {/* Node 2: AI Parse */}
                  <div className="relative z-20 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        demoState === "analyzing"
                          ? "bg-brand-cyan/20 border-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-110"
                          : demoState === "completed"
                          ? "bg-brand-cyan border-brand-cyan"
                          : "bg-gray-900 border-white/10"
                      }`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-[10px] mt-2 text-gray-400 font-semibold">AI Parse</span>
                  </div>

                  {/* Node 3: Export */}
                  <div className="relative z-20 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        demoState === "completed"
                          ? "bg-brand-pink border-brand-pink shadow-[0_0_15px_rgba(236,72,153,0.4)] scale-110"
                          : "bg-gray-900 border-white/10"
                      }`}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <span className="text-[10px] mt-2 text-gray-400 font-semibold">Sync CRM</span>
                  </div>
                </div>

                {/* Console Log Panel */}
                <div className="bg-gray-950/80 rounded-lg p-4 border border-white/5 h-44 flex flex-col justify-between">
                  <div className="space-y-1 text-xs leading-5">
                    {demoState === "idle" && (
                      <p className="text-gray-500 animate-pulse">{'// Press "Trigger Automation Demo" to test pipeline...'}</p>
                    )}
                    {demoState !== "idle" && (
                      <p className="text-emerald-400 font-semibold">⚡ Initializing AutoFlow Daemon v2.0...</p>
                    )}
                    {(demoState === "ingesting" || demoState === "analyzing" || demoState === "completed") && (
                      <p className="text-gray-300">
                        {"[1] Downloading CSV data payload (12,480 rows) ->"}{" "}
                        <span className="text-brand-purple">{demoState === "ingesting" ? `${progress}%` : "Done"}</span>
                      </p>
                    )}
                    {(demoState === "analyzing" || demoState === "completed") && (
                      <p className="text-gray-300">
                        {"[2] Filtering duplicates & schema validation -> Done"}
                      </p>
                    )}
                    {(demoState === "analyzing" || demoState === "completed") && (
                      <p className="text-gray-300">
                        {"[3] Executing agent parse model (gemini-3.5) ->"}{" "}
                        <span className="text-brand-cyan">{demoState === "analyzing" ? `${progress}%` : "Done"}</span>
                      </p>
                    )}
                    {demoState === "completed" && (
                      <p className="text-emerald-400 font-semibold animate-pulse">
                        ✓ [4] Exported 12,408 records successfully to CRM. Time: 4.8s.
                      </p>
                    )}
                  </div>

                  {/* Demo Control Button inside container */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[10px] text-gray-500">Pipeline Status: <span className={demoState === "idle" ? "text-yellow-500" : "text-emerald-500 font-bold"}>{demoState.toUpperCase()}</span></span>
                    <button
                      disabled={demoState !== "idle"}
                      onClick={handleStartDemo}
                      className={`text-xs px-3 py-1.5 rounded font-bold transition-all ${
                        demoState === "idle"
                          ? "bg-brand-purple/80 hover:bg-brand-purple text-white shadow-md active:scale-95 cursor-pointer"
                          : "bg-gray-800 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {demoState === "idle" ? "Run Workflow" : "Processing..."}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Supplementary decorative floating card */}
            <div className="absolute -bottom-8 -left-8 glass rounded-xl p-4 border border-white/10 shadow-xl max-w-[200px] animate-float-delayed hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-brand-cyan/20">
                  <svg className="w-5 h-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold">Workflow Health</p>
                  <p className="text-sm font-bold text-white">99.98% uptime</p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
