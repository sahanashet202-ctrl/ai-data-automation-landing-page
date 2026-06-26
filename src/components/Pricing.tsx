"use client";

import { useState } from "react";

type CurrencyCode = "USD" | "EUR" | "INR";
type BillingPeriod = "monthly" | "annual";

interface PlanConfig {
  name: string;
  description: string;
  basePriceMonthly: number;
  features: string[];
  popular?: boolean;
}

const PRICING_CONFIG = {
  discount: 0.20, // 20% annual discount
  currencies: {
    USD: { symbol: "$", multiplier: 1.0, regionalTariff: 1.0, label: "USD ($)" },
    EUR: { symbol: "€", multiplier: 0.92, regionalTariff: 0.95, label: "EUR (€)" }, // 5% regional adjustment
    INR: { symbol: "₹", multiplier: 83.5, regionalTariff: 0.80, label: "INR (₹)" }  // 20% purchasing power tariff adjustment
  },
  plans: {
    starter: {
      name: "Starter",
      description: "For small teams automating core business files.",
      basePriceMonthly: 49,
      features: [
        "Up to 5 active pipelines",
        "10,000 free operations/mo",
        "Gemini 3.5 Flash models",
        "24-hour email SLA",
        "Basic connectors (CSV, Sheets, Notion)"
      ]
    },
    professional: {
      name: "Professional",
      description: "For scaling systems and production workflows.",
      basePriceMonthly: 129,
      features: [
        "Unlimited active pipelines",
        "100,000 free operations/mo",
        "Gemini 3.5 Pro & custom LLMs",
        "4-hour priority SLA",
        "All 300+ universal connectors",
        "Self-healing schema drift logic",
        "Advanced custom filter policies"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      description: "For high-compliance pipelines and dedicated hardware.",
      basePriceMonthly: 499,
      features: [
        "Custom volume operations",
        "Custom fine-tuned LLM routing",
        "Dedicated VPC & database nodes",
        "99.99% uptime guarantee SLA",
        "SAML, SSO & RBAC security audits",
        "Dedicated Customer Engineer"
      ]
    }
  } as Record<string, PlanConfig>
};

export default function Pricing() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const activeCurrencyConfig = PRICING_CONFIG.currencies[currency];
  const isAnnual = billing === "annual";

  // Dynamic pricing calculation helper
  const calculatePricing = (basePrice: number) => {
    const rawPrice = basePrice * activeCurrencyConfig.multiplier * activeCurrencyConfig.regionalTariff;
    
    // Monthly equivalent price
    const monthlyEquivalent = isAnnual 
      ? rawPrice * (1 - PRICING_CONFIG.discount) 
      : rawPrice;
      
    // Total amount billed
    const totalBilled = isAnnual 
      ? rawPrice * 12 * (1 - PRICING_CONFIG.discount) 
      : rawPrice;

    return {
      monthlyDisplay: Math.round(monthlyEquivalent).toLocaleString(),
      totalDisplay: Math.round(totalBilled).toLocaleString(),
    };
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-gray-950 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none radial-mask" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-3">
            Pricing Plans
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Transparent pricing for teams of any size
          </p>
          <p className="text-lg text-gray-400">
            Pick a tier that fits your automation frequency. Shift currencies or billing cycles dynamically.
          </p>
        </div>

        {/* Pricing Controls: Isolated inside this component so that switching only rerenders this sub-tree */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          
          {/* Currency Switcher */}
          <div className="bg-white/5 border border-white/10 rounded-full p-1 flex space-x-1">
            {(Object.keys(PRICING_CONFIG.currencies) as CurrencyCode[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  currency === cur
                    ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {PRICING_CONFIG.currencies[cur].label}
              </button>
            ))}
          </div>

          {/* Billing Switcher */}
          <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                billing === "monthly"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all relative flex items-center space-x-1 cursor-pointer ${
                billing === "annual"
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Annual</span>
              <span className="bg-brand-cyan/20 text-brand-cyan text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {Object.entries(PRICING_CONFIG.plans).map(([key, plan]) => {
            const prices = calculatePricing(plan.basePriceMonthly);
            const isPopular = plan.popular;

            return (
              <div
                key={key}
                className={`glass rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "border-brand-purple/40 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-gradient-to-b from-gray-900/80 to-gray-950/90 scale-105 z-10"
                    : "border-white/5 hover:border-white/10 hover:scale-[1.02] bg-gray-950/60"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">{plan.description}</p>
                  
                  {/* Dynamic Prices */}
                  <div className="flex items-baseline space-x-1.5 mb-6">
                    <span className="text-4xl font-extrabold text-white">
                      {activeCurrencyConfig.symbol}
                      {prices.monthlyDisplay}
                    </span>
                    <span className="text-gray-500 text-xs">/month</span>
                  </div>

                  {/* Billed indicator */}
                  <div className="h-6 mb-6">
                    <span className="text-xs text-gray-500 font-medium">
                      {isAnnual 
                        ? `Billed ${activeCurrencyConfig.symbol}${prices.totalDisplay} annually` 
                        : "Billed monthly"}
                    </span>
                  </div>

                  <hr className="border-white/5 mb-8" />

                  {/* Plan Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isPopular ? "text-brand-cyan" : "text-brand-purple"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs text-gray-300 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Button */}
                <div className="mt-8">
                  <button
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer ${
                      isPopular
                        ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    Deploy Plan
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
