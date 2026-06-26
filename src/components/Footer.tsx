"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none radial-mask" />

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 border border-white/10 bg-gradient-to-tr from-gray-950 via-gray-900/60 to-gray-950 text-center relative overflow-hidden shadow-2xl">
          
          {/* Internal Glows */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3.5 py-1.5 rounded-full mb-6 inline-block">
              Get Started Instantly
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready to automate your
              <br />
              <span className="text-gradient">data operations?</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Join hundreds of high-growth companies that use AutoFlow to sync, parse, and scale their infrastructure without dedicated pipelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                Deploy Pipeline Free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full font-semibold text-white transition-all">
                Contact Enterprise Sales
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-gray-500 font-mono">
              <span>✓ 14-day free trial</span>
              <span>•</span>
              <span>✓ No credit card required</span>
              <span>•</span>
              <span>✓ Setup in 15 mins</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/5 max-w-7xl mx-auto" />

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <a href="#" className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-base shadow-[0_0_10px_rgba(139,92,246,0.4)]">
              A
            </span>
            <span className="font-extrabold text-lg tracking-tight text-white">
              Auto<span className="text-brand-cyan">Flow</span>
            </span>
          </a>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
            Dynamic agentic data automation platform for modern engineering teams.
          </p>
          
          {/* Newsletter Signup */}
          <div className="space-y-2 max-w-xs">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Subscribe to Changelog</p>
            <form className="relative flex rounded-full border border-white/10 bg-white/5 p-1 focus-within:border-brand-purple/40">
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full bg-transparent pl-4 pr-16 py-2 text-xs text-white focus:outline-none placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 bg-brand-purple hover:bg-brand-purple/90 rounded-full text-white text-[10px] font-bold uppercase transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Guardrails</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Developers</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API References</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SLA Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CCPA Policy</a></li>
            </ul>
          </div>

        </div>

      </div>

      <hr className="border-white/5 max-w-7xl mx-auto" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 relative z-10">
        <p>© 2026 AutoFlow Technologies Inc. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 font-mono">Region: MULTI_GATEWAY_V2</p>
      </div>

    </footer>
  );
}
