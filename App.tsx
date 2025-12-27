
import React, { useState } from 'react';
import { 
  Home, HardHat, MapPin, Phone, Globe, Star, ChevronRight, Hammer, 
  Paintbrush, MessageSquare, Clock, Menu, X, Info, CheckCircle2,
  ShieldCheck, Ruler, Briefcase
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Custom Residencies", desc: "One-of-a-kind estates designed with precision engineering.", icon: <Home /> },
    { title: "Smart Renovations", desc: "Modernizing existing structures with future-proof materials.", icon: <Ruler /> },
    { title: "Industrial Build", desc: "Scalable commercial spaces built for high-performance business.", icon: <Hammer /> },
    { title: "Architectural Design", desc: "Blueprints that balance aesthetic beauty with structural integrity.", icon: <Paintbrush /> },
    { title: "Site Development", desc: "Expert land grading and utility infrastructure for complex sites.", icon: <HardHat /> },
    { title: "Luxury Interiors", desc: "High-end material sourcing and artisanal finish work.", icon: <Star /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0c]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
                <HardHat className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                INNOVATION <span className="text-blue-500">HOMES</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition">Services</a>
              <a href="#process" className="text-sm font-medium text-slate-400 hover:text-white transition">Our Process</a>
              <a href="#portfolio" className="text-sm font-medium text-slate-400 hover:text-white transition">Portfolio</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                Get a Quote
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 py-8 space-y-4 animate-in fade-in slide-in-from-top-4">
            <a href="#services" className="block text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#process" className="block text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#portfolio" className="block text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" className="block bg-blue-600 text-center py-4 rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.15),transparent)] animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/20 via-[#0a0a0c] to-[#0a0a0c]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span>TEXAS LICENSED & INSURED</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
              Crafting Legacies<br/>
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Precision</span>.
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
              Serving Pasadena and the Greater Houston area with uncompromising quality. We specialize in luxury residential builds and sophisticated commercial renovations.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-white text-black px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-50 transition shadow-2xl shadow-white/5 flex items-center">
                Start Your Project <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="bg-slate-800/50 backdrop-blur-xl border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-700 transition flex items-center">
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Process Section - High Value Replacement */}
      <section id="process" className="py-32 relative border-t border-white/5 bg-[#0d0d0f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Master Build Process</h2>
              <p className="text-slate-400 text-lg mb-12">
                We believe in transparency and meticulous planning. Our four-stage methodology ensures every detail of your vision is executed to perfection.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Consultation", desc: "Understanding your vision, budget, and functional needs in detail.", icon: <MessageSquare /> },
                  { title: "Conceptual Design", desc: "Creating architectural blueprints and selecting premium materials.", icon: <Briefcase /> },
                  { title: "Precision Build", desc: "Execution by master craftsmen using industry-leading standards.", icon: <Hammer /> },
                  { title: "Final Handover", desc: "Rigorous quality checks and final walk-through of your new space.", icon: <CheckCircle2 /> }
                ].map((step, i) => (
                  <div key={i} className="flex space-x-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
                alt="Process" 
                className="relative rounded-[2.5rem] border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-black text-white">15+</div>
                <div className="text-blue-100 text-xs font-bold uppercase tracking-widest mt-1">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Our Core Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
                <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {/* Using React.cloneElement with any casting to allow className injection to the icon component */}
                  {React.cloneElement(s.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#0a0a0c] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Client Rating", val: "5.0/5" },
            { label: "Pasadena Projects", val: "240+" },
            { label: "Materials Choice", val: "Elite" },
            { label: "Years Lead", val: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.val}</div>
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's Discuss Your Vision</h2>
              <p className="text-slate-400 mb-12 text-lg">Whether it's a new build or a major renovation, our team is ready to deliver architectural excellence.</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600/10 p-4 rounded-xl text-blue-500 border border-blue-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Our Studio</h4>
                    <p className="text-slate-400">1541 Richey St, Pasadena, TX 77502</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600/10 p-4 rounded-xl text-blue-500 border border-blue-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Direct Line</h4>
                    <p className="text-slate-400">(832) 526-9215</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input placeholder="Name" className="bg-black/40 border border-white/10 rounded-xl p-4 w-full focus:ring-2 focus:ring-blue-500 outline-none text-white" />
                  <input placeholder="Email" className="bg-black/40 border border-white/10 rounded-xl p-4 w-full focus:ring-2 focus:ring-blue-500 outline-none text-white" />
                </div>
                <select className="bg-black/40 border border-white/10 rounded-xl p-4 w-full focus:ring-2 focus:ring-blue-500 outline-none text-white appearance-none">
                  <option className="bg-slate-900">Custom Residence</option>
                  <option className="bg-slate-900">Home Renovation</option>
                  <option className="bg-slate-900">Commercial Project</option>
                </select>
                <textarea placeholder="Message" className="bg-black/40 border border-white/10 rounded-xl p-4 w-full h-32 focus:ring-2 focus:ring-blue-500 outline-none text-white resize-none"></textarea>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-500/20">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HardHat className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white uppercase">Innovation Homes</span>
            </div>
            
            <div className="flex space-x-10 text-slate-500 text-sm font-medium">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Licensing</a>
            </div>
            
            <div className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Innovation Homes Construction. Texas Licensed #832526
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
