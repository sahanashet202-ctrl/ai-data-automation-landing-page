"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does AutoFlow handle schema changes in my source files?",
    answer: "AutoFlow uses 'self-healing' agentic logic. When our pipeline detects a column mismatch, rename, or type change, it doesn't immediately fail. Instead, a light LLM sub-agent analyzes the new layout, map-corrects it to the target database structure, flags it in your schema dashboard, and resumes the write automatically, sending a notification to Slack/Teams."
  },
  {
    question: "Which LLM models power the data automation agents?",
    answer: "By default, we utilize Google's Gemini 3.5 Flash for high-speed, cost-effective extraction, and Gemini 3.5 Pro for complex decision routing and reasoning. On Enterprise plans, you can plug in custom fine-tuned models, OpenAI models, or run pipelines using fully self-hosted local LLMs inside your VPC."
  },
  {
    question: "How does regional pricing and multi-currency billing work?",
    answer: "We offer native dynamic pricing calculated relative to your operating region. Billing is processed through local gateways in USD, EUR, or INR. Annual contracts receive a 20% discount across all tiers, and regional tariff adjustments are automatically calculated relative to your selected country's purchasing power."
  },
  {
    question: "Can I host AutoFlow inside our own cloud environment?",
    answer: "Yes, our Enterprise tier supports private VPC deployments. We provide managed Kubernetes (EKS, GKE) templates and Terraform modules so that no data ever leaves your cloud perimeter. This is fully compliant with HIPAA, GDPR, and SOC2 policies."
  },
  {
    question: "Is there a limit to the number of rows or files I can process?",
    answer: "Our Starter plan supports up to 10,000 operations per month, while Professional supports up to 100,000 operations. An operation is defined as a single pipeline run (e.g., parsing one multi-page invoice or syncing a database row event). Custom enterprise plans support millions of operations with dedicated scaling policies."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gray-950 border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none radial-mask" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            {"Got questions? We've got answers"}
          </p>
          <p className="text-lg text-gray-400">
            Learn more about how our AI agents, pipeline triggers, and regional tariffs work.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white/5 border-brand-purple/20 shadow-[0_0_15px_rgba(139,92,246,0.05)]"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-all ${
                      isOpen ? "bg-brand-purple text-white rotate-45" : "text-gray-400"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
