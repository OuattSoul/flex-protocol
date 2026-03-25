/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Users, 
  Globe, 
  Github, 
  Twitter, 
  Linkedin, 
  Menu,
  X,
  Smartphone,
  Lock,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solution', href: '#solution' },
    { name: 'Impact', href: '#impact' },
    { name: 'Tech', href: '#tech' },
  ];

  const DASHBOARD_URL = "https://flex-tesnet.vercel.app/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="FLEX Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-2xl font-semibold transition-all shadow-lg shadow-emerald-200 active:scale-95"
          >
            Dashboard Access
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold w-full text-center"
            >
              Dashboard Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px]" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-emerald-200/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Zap size={16} />
            <span>Programmable Impact Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Making Humanitarian Aid <span className="text-emerald-600">Programmable</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed mx-auto">
            FLEX eliminates fund leakage and ensures 100% transparency in aid distribution through smart, conditional impact boxes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-3xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-200 group active:scale-95">
              Start Building
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-3xl font-bold text-lg transition-all active:scale-95">
              Read Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Partners and Trust Bar

const HowItWorks = () => {
  const steps = [
    {
      icon: <Globe className="text-emerald-600" size={32} />,
      title: "NGO Creation",
      desc: "NGOs define specific impact goals and create programmable boxes with conditional logic."
    },
    {
      icon: <Users className="text-emerald-600" size={32} />,
      title: "Student Receipt",
      desc: "Beneficiaries receive digital vouchers directly on their mobile devices via SocialConnect."
    },
    {
      icon: <Smartphone className="text-emerald-600" size={32} />,
      title: "Merchant Redemption",
      desc: "Vouchers are redeemed at local merchants, triggering instant settlement on-chain."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How FLEX Works</h2>
          <p className="text-slate-600 text-lg">
            A seamless flow designed to maximize impact and minimize friction for all stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, label, suffix = "" }: { value: string, label: string, suffix?: string }) => {
  return (
    <div className="text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-emerald-600 mb-2"
      >
        {value}{suffix}
      </motion.div>
      <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter value="100" suffix="%" label="Transparency" />
          <StatCounter value="0.01" suffix="$" label="Avg. Fees" />
          <StatCounter value="50" suffix="k+" label="Impact Boxes" />
          <StatCounter value="12" suffix="+" label="Countries" />
        </div>
      </div>
    </section>
  );
};

const TechSection = () => {
  const features = [
    {
      icon: <Lock className="text-emerald-600" />,
      title: "Celo Blockchain",
      desc: "Built on Celo for mobile-first accessibility and carbon-negative operations."
    },
    {
      icon: <Smartphone className="text-emerald-600" />,
      title: "SocialConnect",
      desc: "Onboard users instantly using just their phone numbers, no complex keys required."
    },
    {
      icon: <BarChart3 className="text-emerald-600" />,
      title: "Real-time Auditing",
      desc: "Every transaction is verifiable on-chain, providing instant proof of impact."
    }
  ];

  return (
    <section id="tech" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Secure, Scalable, and <br />
              <span className="text-emerald-500">Mobile-First</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              We leverage cutting-edge Web3 technology to solve real-world humanitarian challenges without the complexity usually associated with blockchain.
            </p>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500/20 to-transparent p-1 rounded-[3rem]">
              <div className="bg-slate-800/50 backdrop-blur-3xl rounded-[2.9rem] p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full" />
                    <div>
                      <div className="text-sm font-bold">Protocol Status</div>
                      <div className="text-xs text-emerald-500">Live & Secure</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">v2.4.0</div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-700 rounded-lg" />
                        <div className="h-4 w-24 bg-slate-700 rounded" />
                      </div>
                      <div className="h-4 w-12 bg-emerald-500/20 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="FLEX Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Empowering global impact through programmable humanitarian aid.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Protocol</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900"
              />
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all">
                Get Updates
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 FLEX Protocol. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ImpactStats />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
}
