"use client";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  result: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Data Engineering",
    company: "Fintech Flow",
    content: "Deploying AutoFlow allowed us to retire over 45 custom parser scripts. It handles invoice variances effortlessly and saves us 30 hours of engineering maintenance weekly.",
    avatar: "SC",
    result: "45+ parser scripts retired"
  },
  {
    name: "Marcus Aurelius",
    role: "Lead DevOps Architect",
    company: "SaaSify",
    content: "The schema-drift handling is next level. Our Salesforce API changed last week, and AutoFlow's agent auto-healed the pipeline. Downstream tasks didn't skip a single write.",
    avatar: "MA",
    result: "Zero downtime on API drift"
  },
  {
    name: "Elena Rostova",
    role: "Head of Operations",
    company: "Global Logistics Group",
    content: "We ingest 100k shipping documents monthly. Standard OCR was giving us 12% error rates. AutoFlow dropped that to 0.4% using its agentic correction loops.",
    avatar: "ER",
    result: "Error rates dropped below 0.5%"
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "HealthPulse",
    content: "Compliance and security were our main roadblocks. AutoFlow's private VPC deployment options checked all our HIPAA boxes while maintaining stellar parse speeds.",
    avatar: "DK",
    result: "Full HIPAA compliance met"
  },
  {
    name: "Chloe Jenkins",
    role: "Product Ops Manager",
    company: "E-Cart",
    content: "Setting up database syncer events took us less than 15 minutes. Now all our vendor catalog sheets sync directly to our postgres server automatically.",
    avatar: "CJ",
    result: "Pipeline setup in under 15m"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gray-950 border-t border-white/5 overflow-hidden">
      
      {/* Glow shapes */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none radial-mask" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none radial-mask" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">
            Success Stories
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Loved by operations & data engineers
          </p>
          <p className="text-lg text-gray-400">
            See how teams automate messy parsing work, save resources, and maintain resilient data pipelines.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-full relative overflow-hidden mb-8 py-2">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />
        
        <div className="flex w-[200%] animate-marquee">
          {/* First track */}
          <div className="flex space-x-6 w-1/2 justify-around">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={`t1-${idx}`}
                className="w-[380px] flex-shrink-0 glass p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-2.5 py-1 rounded-full">
                      {t.result}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Verified Case</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}, <span className="text-gray-400">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate track for loop */}
          <div className="flex space-x-6 w-1/2 justify-around">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={`t1-dup-${idx}`}
                className="w-[380px] flex-shrink-0 glass p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-2.5 py-1 rounded-full">
                      {t.result}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Verified Case</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}, <span className="text-gray-400">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="w-full relative overflow-hidden py-2">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />
        
        <div className="flex w-[200%] animate-marquee-reverse">
          {/* First track */}
          <div className="flex space-x-6 w-1/2 justify-around">
            {TESTIMONIALS.slice().reverse().map((t, idx) => (
              <div
                key={`t2-${idx}`}
                className="w-[380px] flex-shrink-0 glass p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-brand-pink uppercase tracking-wider bg-brand-pink/10 px-2.5 py-1 rounded-full">
                      {t.result}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Verified Case</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}, <span className="text-gray-400">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate track for loop */}
          <div className="flex space-x-6 w-1/2 justify-around">
            {TESTIMONIALS.slice().reverse().map((t, idx) => (
              <div
                key={`t2-dup-${idx}`}
                className="w-[380px] flex-shrink-0 glass p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-gray-900/40 to-gray-950/60 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold text-brand-pink uppercase tracking-wider bg-brand-pink/10 px-2.5 py-1 rounded-full">
                      {t.result}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Verified Case</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center space-x-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}, <span className="text-gray-400">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
