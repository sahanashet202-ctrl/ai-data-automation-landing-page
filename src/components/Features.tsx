"use client";

import { useState } from "react";

interface Feature {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features: Feature[] = [
    {
      id: 0,
      badge: "Agentic AI",
      title: "Self-Healing AI Workflows",
      shortDesc: "LLM agents that recover from errors and schemas shifts.",
      longDesc: "Deploy intelligent agents that don't just follow static paths. They make decisions, validate outputs against safety constraints, self-correct on failures, and alert your team only when human review is strictly needed.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      visual: (
        <div className="relative w-full h-full min-h-[220px] bg-gray-950/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="text-xs text-brand-purple font-semibold uppercase tracking-wider mb-2">Agent Execution Loop</div>
          <div className="space-y-3 z-10 flex-grow flex flex-col justify-center">
            {/* Step 1 */}
            <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-400 font-bold">1</div>
              <span className="text-xs text-white font-mono">Validate JSON schema... OK</span>
            </div>
            {/* Step 2 */}
            <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/5 animate-pulse">
              <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[10px] text-brand-cyan font-bold">2</div>
              <span className="text-xs text-white font-mono">Re-evaluating logic gate...</span>
            </div>
            {/* Step 3 */}
            <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/5 opacity-50">
              <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center text-[10px] text-gray-400 font-bold">3</div>
              <span className="text-xs text-gray-400 font-mono">Sync to database destination</span>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-purple/30 rounded-full blur-2xl pointer-events-none" />
        </div>
      ),
    },
    {
      id: 1,
      badge: "Integrations",
      title: "Universal Live Connectors",
      shortDesc: "Connect to database warehouses, CRMs, and custom APIs.",
      longDesc: "Instantly link Snowflake, BigQuery, Salesforce, HubSpot, Stripe, or any REST/GraphQL endpoint. AutoFlow acts as the intelligence layer, listening to events and running automations as soon as data changes.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      visual: (
        <div className="relative w-full h-full min-h-[220px] bg-gray-950/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="text-xs text-brand-cyan font-semibold uppercase tracking-wider mb-2">Connected Infrastructure</div>
          <div className="flex items-center justify-around flex-grow relative z-10">
            {/* Source */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 text-xs font-bold mb-1">SF</div>
              <span className="text-[9px] text-gray-400">Snowflake</span>
            </div>
            {/* Flow line */}
            <div className="flex-grow max-w-[60px] h-[2px] bg-gradient-to-r from-blue-500 via-brand-cyan to-emerald-500 relative">
              <div className="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full bg-brand-cyan -translate-y-1/2 animate-[ping_1.5s_infinite]" />
            </div>
            {/* Target */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 text-xs font-bold mb-1">CRM</div>
              <span className="text-[9px] text-gray-400">Salesforce</span>
            </div>
          </div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      ),
    },
    {
      id: 2,
      badge: "AI Extraction",
      title: "Messy Document Parsing",
      shortDesc: "Transform unstructured files and emails into clean JSON.",
      longDesc: "Stop building custom regex templates for every vendor invoice, contract, or email. Upload any PDF, image, Excel sheet, or document and our models will automatically map the fields to your schema.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      visual: (
        <div className="relative w-full h-full min-h-[220px] bg-gray-950/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="text-xs text-brand-pink font-semibold uppercase tracking-wider mb-2">{"Unstructured -> Structured"}</div>
          <div className="grid grid-cols-2 gap-4 items-center flex-grow z-10">
            {/* Messy Document mock */}
            <div className="bg-white/5 p-2 rounded-lg border border-white/5 font-mono text-[9px] text-gray-400 space-y-1">
              <p className="text-brand-pink">{"// Raw Invoice PDF"}</p>
              <p>Vendor: Acme Inc.</p>
              <p>Total due: USD $1,240.50</p>
              <p>Due: Oct 24, 2026</p>
            </div>
            {/* Clean JSON output */}
            <div className="bg-gray-900 p-2 rounded-lg border border-brand-pink/20 font-mono text-[9px] text-emerald-400 space-y-1">
              <p className="text-white">{"{"}</p>
              <p className="pl-2">{'"amount": 1240.50,'}</p>
              <p className="pl-2">{'"currency": "USD",'}</p>
              <p className="pl-2">{'"verified": true'}</p>
              <p className="text-white">{"}"}</p>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-pink/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      ),
    },
    {
      id: 3,
      badge: "Real-time Metrics",
      title: "Observability & Insights",
      shortDesc: "Audit logs and performance tracing down to the millisecond.",
      longDesc: "Gain full visibility into every token spent, database write, and execution time. Track and alerts schema drift automatically before workflows break or downstream tables corruption.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      visual: (
        <div className="relative w-full h-full min-h-[220px] bg-gray-950/80 rounded-xl p-4 border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="text-xs text-white font-semibold uppercase tracking-wider mb-2">System Metrics</div>
          <div className="grid grid-cols-2 gap-2 flex-grow items-center z-10">
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
              <p className="text-[10px] text-gray-400">Total Requests</p>
              <p className="text-lg font-bold text-white mt-1">1.8M</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
              <p className="text-[10px] text-gray-400">Avg. Latency</p>
              <p className="text-lg font-bold text-brand-cyan mt-1">142ms</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center col-span-2">
              <p className="text-[10px] text-gray-400">Success Rate</p>
              <p className="text-lg font-bold text-emerald-400 mt-1">99.98%</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 bg-gray-950 border-y border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none radial-mask" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none radial-mask" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">
            Core Features
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Engineered for high-scale automation
          </p>
          <p className="text-lg text-gray-400">
            Everything your team needs to ingestion, process, and synchronize large-scale business datasets.
          </p>
        </div>

        {/* Desktop View: Bento Grid (Visible on md and larger) */}
        <div className="hidden md:grid grid-cols-12 gap-6 items-stretch">
          
          {/* Left panel: Feature selection grid */}
          <div className="col-span-6 flex flex-col justify-between space-y-4">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-white/5 border-brand-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                      : "bg-transparent border-transparent hover:bg-white/2 hover:border-white/5"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-brand-cyan uppercase tracking-wide">
                          {feature.badge}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mt-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">
                        {feature.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel: Active Feature Visual and Details */}
          <div className="col-span-6 flex flex-col">
            <div className="glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between h-full bg-gradient-to-b from-gray-900/60 to-gray-950/80 shadow-2xl relative group overflow-hidden">
              
              {/* Outer decorative card highlights */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Visual simulation */}
              <div className="mb-8 w-full">
                {features[activeIndex].visual}
              </div>

              {/* Text detail */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {features[activeIndex].title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {features[activeIndex].longDesc}
                </p>
              </div>

              {/* Learn More link */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="text-xs text-gray-500 font-mono">MODULE_ID: 0{features[activeIndex].id + 1}</span>
                <a href="#pricing" className="text-xs font-bold text-white hover:text-brand-cyan flex items-center space-x-1 group/link">
                  <span>Deploy Model</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile View: Accordion (Visible on mobile/tablet) */}
        <div className="md:hidden space-y-4">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={feature.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-white/5 border-brand-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                    : "bg-transparent border-white/5"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2.5 rounded-xl transition-all ${
                        isActive ? "bg-brand-purple text-white" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wide">
                        {feature.badge}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 space-y-6">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.longDesc}
                    </p>
                    <div className="w-full">
                      {feature.visual}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
