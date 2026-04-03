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
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      text: "The single type of affiliate product that pays 10 to 50 times more per sale than standard programs — and why almost nobody starting out knows it exists"
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      text: "The exact AI prompt that generates a complete, high-converting 5-part email sequence in under 4 minutes — copy it and deploy it immediately"
    },
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      text: "Why building a big audience before you earn your first commission is the most common time-wasting mistake in affiliate marketing — and the zero-audience traffic method that works"
    },
    {
      icon: <Network className="w-6 h-6 text-blue-400" />,
      text: "The 3-page AI-powered funnel structure responsible for most high-ticket affiliate commissions in 2026 — mapped out step by step on page 7"
    },
    {
      icon: <Ban className="w-6 h-6 text-rose-500" />,
      text: "The #1 reason motivated, driven people fail at affiliate marketing every day — and the single structural fix that eliminates the problem entirely"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      text: "How to receive affiliate commissions in USD regardless of where you live or bank — the international payment setup guide on page 4"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      text: "The AI content calendar system that produces a full month of affiliate marketing material in one single afternoon — full walkthrough on page 9"
    }
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

          {/* LEFT SIDE */}
          <div>
            <div className="hero-badge inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs tracking-widest uppercase border border-indigo-500/30 mb-6">
              ⚡ Free Instant Download
            </div>
            <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              The AI Shortcut to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 inline-block">
                Your First $1,000 in Affiliate Income
              </span>
            </h1>
            <p className="hero-sub text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Grab the free blueprint that reveals the exact AI-powered affiliate method total beginners are using to earn their first consistent commissions in 2026 — without an existing audience, without technical skills, and without writing a single word of content manually.
            </p>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: "✅", text: "100% Free" },
                { icon: "⚡", text: "Instant Delivery" },
                { icon: "🔒", text: "No Spam Ever" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                  <span>{badge.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="form-card w-full max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <GlassCard className="relative !bg-slate-900/80 !backdrop-blur-xl border-white/10 p-8">
              <h3 className="text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                Get Your Free AI Blueprint Now
              </h3>
              <p className="text-sm text-slate-400 text-center mb-6">
                Instant delivery. 100% free. No spam ever.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your first name"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
                <input
                  type="email"
                  placeholder="Your best email"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                />
                <Button type="submit" className="w-full py-4 text-lg font-bold">
                  {config.ctaText}
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  🔒 Secure. We never share your info.
                </p>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>

      {/* WHAT'S INSIDE SECTION */}
      <section className="py-24 px-4 bg-[#080d1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-3">
              Inside The Free Blueprint
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Here Is What the Free Blueprint Reveals:
            </h2>
          </div>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <GlassCard
                key={i}
                className="benefit-row flex gap-6 items-start p-6 !bg-slate-800/30 hover:!bg-slate-800/60 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center mt-0.5">
                  {b.icon}
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 text-lg leading-relaxed">{b.text}</p>
                </div>
                <div className="flex-shrink-0 text-indigo-400 font-bold text-lg mt-1">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-900/20 via-slate-900/50 to-purple-900/20 border-y border-slate-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { v: "14,200+", l: "Copies Downloaded", icon: "📥" },
            { v: "4.9/5", l: "Average Rating", icon: "⭐" },
            { v: "100%", l: "Free — Always", icon: "🎁" }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2">{s.v}</div>
              <div className="text-slate-400 tracking-wide uppercase text-sm font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT IS FOR SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-3">
              Is This For You?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              This Blueprint Is Built For You If...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <GlassCard className="text-left hover:border-indigo-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">
                You Have Never Earned a Dollar Online
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every tutorial you find either costs a fortune or leaves you more confused than before. This blueprint cuts through the noise and gives you one clear, proven path — not 47 conflicting options.
              </p>
            </GlassCard>

            <GlassCard className="text-left hover:border-purple-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">
                You Tried Before and Burned Out
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Manual content creation killed your momentum before results arrived. AI changes that equation completely — this blueprint shows you how to let machines handle the volume while you focus on strategy.
              </p>
            </GlassCard>

            <GlassCard className="text-left hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">
                You Earn Something and Want More
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                You cracked the basics but your income is capped by your hours. AI leverage is what breaks that ceiling. This blueprint shows you exactly how to implement it.
              </p>
            </GlassCard>
          </div>

          {/* BOTTOM FORM */}
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs tracking-widest uppercase border border-emerald-500/30 mb-6">
              🎁 Get Instant Free Access
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready? Your Blueprint Is One Click Away
            </h2>
            <p className="text-slate-400 mb-8">
              15 seconds to sign up. Instant delivery.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <input
                type="text"
                placeholder="Your first name"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
              <input
                type="email"
                placeholder="Your best email"
                required
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />
              <Button type="submit" className="w-full py-4 text-lg font-bold">
                {config.ctaText}
              </Button>
              <p className="text-xs text-center text-slate-500">
                🔒 Secure. We never share your info. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      <LegalFooter />
    </div>
  );
}
