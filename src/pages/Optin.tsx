import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard, Button, LegalFooter } from '../components/ui';
import { config } from '../config';
import { Lightbulb, Bot, Target, Network, Ban, DollarSign, Clock } from 'lucide-react';

export default function Optin() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6, ease: "back.out(1.7)" })
      .from(".hero-headline", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".form-card", { y: 40, opacity: 0, scale: 0.95, duration: 0.8, ease: "power3.out" }, "-=0.4");
      
    gsap.utils.toArray('.benefit-row').forEach((row: any) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/bridge');
  };

  const benefits = [
    { icon: <Lightbulb className="w-6 h-6 text-yellow-400" />, text: "The single type of affiliate product that pays 10 to 50 times more per sale than standard programs \u2014 and why almost nobody starting out knows it exists" },
    { icon: <Bot className="w-6 h-6 text-indigo-400" />, text: "The exact AI prompt that generates a complete, high-converting 5-part email sequence in under 4 minutes \u2014 copy it and deploy it immediately" },
    { icon: <Target className="w-6 h-6 text-red-400" />, text: "Why building a big audience before you earn your first commission is the most common time-wasting mistake in affiliate marketing \u2014 and the zero-audience traffic method that works" },
    { icon: <Network className="w-6 h-6 text-blue-400" />, text: "The 3-page AI-powered funnel structure responsible for most high-ticket affiliate commissions in 2026 \u2014 mapped out step by step on page 7" },
    { icon: <Ban className="w-6 h-6 text-rose-500" />, text: "The #1 reason motivated, driven people fail at affiliate marketing every day \u2014 and the single structural fix that eliminates the problem entirely" },
    { icon: <DollarSign className="w-6 h-6 text-emerald-400" />, text: "How to receive affiliate commissions in USD regardless of where you live or bank \u2014 the international payment setup guide on page 4" },
    { icon: <Clock className="w-6 h-6 text-orange-400" />, text: "The AI content calendar system that produces a full month of affiliate marketing material in one single afternoon \u2014 full walkthrough on page 9" }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-24 px-4 overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30"
          style={{ backgroundImage: `url(${config.images.optinHero})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#080d1a]/80 via-[#080d1a]/90 to-[#080d1a]" />
        
        <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-badge inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs tracking-widest uppercase border border-indigo-500/30 mb-6">
              \u26a1 Free Instant Download
            </div>
            <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              The AI Shortcut to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 cursor-blink inline-block">
                Your First $1,000 in Affiliate Income
              </span>
            </h1>
            <p className="hero-sub text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Grab the free blueprint that reveals the exact AI-powered affiliate method total beginners are using to earn their first consistent commissions in 2026 \u2014 without an existing audience, without technical skills, and without writing a single word of content manually.
            </p>
          </div>
          
          <div className="form-card w-full max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <GlassCard className="relative !bg-slate-900/80 !backdrop-blur-xl border-white/10 p-8">
              <h3 className="text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Get Your Free AI Blueprint Now
              </h3>
              <p className="text-sm text-slate-400 text-center mb-6">Instant delivery. 100% free. No spam ever.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input type="text" placeholder="Your first name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition" />
                </div>
                <div>
                  <input type="email" placeholder="Your best email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition" />
                </div>
                <Button type="submit" className="w-full py-4 text-lg">
                  {config.ctaText}
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">\ud83d\udd12 Secure. We never share your info.</p>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* WHAT'S INSIDE */}
      <section className="py-24 px-4 bg-[#080d1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Here Is What the Free Blueprint Reveals:
          </h2>
          <div className="space-y-6">
            {benefits.map((b, i) => (
              <GlassCard key={i} className="benefit-row flex gap-6 items-start p-6 !bg-slate-800/30 hover:!bg-slate-800/50">
                <div className="flex-shrink-0 mt-1">{b.icon}</div>
                <p className="text-slate-300 text-lg leading-relaxed">{b.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { v: "14,200+", l: "Copies Downloaded" },
            { v: "4.9/5", l: "Average Rating" },
            { v: "100%", l: "Free \u2014 Always" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2">{s.v}</div>
              <div className="text-slate-400 tracking-wide uppercase text-sm font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">This Blueprint Is Built For You If...</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <GlassCard className="text-left">
              <div className="text-4xl mb-4">\ud83d\udcbb</div>
              <h3 className="text-xl font-bold text-white mb-3">You Have Never Earned a Dollar Online</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Every tutorial you find either costs a fortune or leaves you more confused than before. This blueprint cuts through the noise and gives you one clear, proven path \u2014 not 47 conflicting options.</p>
            </GlassCard>
            <GlassCard className="text-left">
              <div className="text-4xl mb-4">\ud83d\udd04</div>
              <h3 className="text-xl font-bold text-white mb-3">You Tried Before and Burned Out</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Manual content creation killed your momentum before results arrived. AI changes that equation completely \u2014 this blueprint shows you how to let machines handle the volume while you focus on strategy.</p>
            </GlassCard>
            <GlassCard className="text-left">
              <div className="text-4xl mb-4">\ud83d\udcc8</div>
              <h3 className="text-xl font-bold text-white mb-3">You Earn Something and Want More</h3>
              <p className="text-slate-400 text-sm leading-relaxed">You cracked the basics but your income is capped by your hours. AI leverage is what breaks that ceiling. This blueprint shows you exactly how to implement it.</p>
            </GlassCard>
          </div>
          
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2">Ready? Your Blueprint Is One Click Away</h2>
            <p className="text-slate-400 mb-8">15 seconds to sign up. Instant delivery.</p>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <input type="text" placeholder="Your first name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition" />
              <input type="email" placeholder="Your best email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition" />
              <Button type="submit" className="w-full py-4 text-lg">{config.ctaText}</Button>
            </form>
          </div>
        </div>
      </section>

      <LegalFooter />
    </div>
  );
}
