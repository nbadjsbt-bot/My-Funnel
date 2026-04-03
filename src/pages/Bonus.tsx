import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard, Button, LegalFooter } from '../components/ui';
import { config } from '../config';

export default function Bonus() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-content", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.to(".check-path-bonus", { strokeDashoffset: 0, duration: 1, ease: "power2.out", delay: 0.3 });
    
    gsap.utils.toArray('.dl-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 40, opacity: 0, duration: 0.5, delay: i * 0.15
      });
    });
  });

  const bonuses = [
    { i: "\ud83d\udcdd", n: "The AI Affiliate Copy Vault", v: "$97", l: config.bonusLinks.bonus1, d: "52 done-for-you AI prompt templates for every piece of affiliate copy needed. Compatible with ChatGPT, Claude, and Gemini." },
    { i: "\ud83d\udcc5", n: "The 30-Day AI Affiliate Launch Calendar", v: "$67", l: config.bonusLinks.bonus2, d: "Day-by-day action plan for the first 30 days implementing AI Partner Accelerator. No guesswork." },
    { i: "\ud83d\udd0d", n: "The High-Ticket Product Research Database", v: "$97", l: config.bonusLinks.bonus3, d: "Pre-researched database of 38 high-ticket affiliate products across top Digistore24 categories." },
    { i: "\ud83d\udcca", n: "The Zero-Budget Traffic Playbook", v: "$97", l: config.bonusLinks.bonus4, d: "Complete guide to driving affiliate traffic without spending on ads \u2014 three methods in full detail." },
    { i: "\ud83d\udcb0", n: "The Affiliate Commission Tracking Spreadsheet", v: "$47", l: config.bonusLinks.bonus5, d: "Professional Google Sheets dashboard tracking every affiliate business metric." }
  ];

  return (
    <div className="min-h-screen pb-16" ref={containerRef}>
      {/* HERO SECTION */}
      <div className="relative py-24 px-4 mb-16 text-center border-b border-white/10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${config.images.bonusHero})` }}></div>
        <div className="absolute inset-0 bg-[#080d1a]/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto hero-content">
          <div className="flex justify-center mb-8">
            <svg className="w-24 h-24 text-emerald-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <circle cx="50" cy="50" r="45" className="stroke-emerald-400/20" />
              <path className="check-path-bonus" strokeDasharray="100" strokeDashoffset="100" d="M30 50L45 65L70 35" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Congratulations \u2014 Your $405 Bonus Package Is Ready to Download Below
          </h1>
          
          <div className="flex justify-center items-center gap-3 text-slate-300 font-medium mb-6">
            <img src={config.author.photo} alt={config.author.name} className="w-10 h-10 rounded-full border border-indigo-500" />
            <span>Delivered personally by {config.author.name}, digitaltoolkt.com.ng</span>
          </div>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Thank you for trusting my recommendation. Download everything below before you open the main program \u2014 you will need these from day one.
          </p>
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => (
            <GlassCard key={i} className="dl-card flex flex-col justify-between border-emerald-500/20 hover:border-emerald-500/50 transition">
              <div>
                <div className="text-4xl mb-4">{b.i}</div>
                <h3 className="text-xl font-bold text-white mb-2">{b.n}</h3>
                <div className="inline-block px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
                  Value: {b.v}
                </div>
                <p className="text-slate-400 text-sm mb-8">{b.d}</p>
              </div>
              <Button href={b.l} target="_blank" variant="success" className="w-full">
                Download \u2192
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="max-w-4xl mx-auto px-4 mb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Do These Three Things Right Now:</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <GlassCard className="!bg-indigo-900/20">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-4">1</div>
            <h4 className="text-lg font-bold text-white mb-3">Download All 5 Files First</h4>
            <p className="text-slate-400 text-sm">Save every bonus to your device before starting the main course. You will need them alongside the program from day one.</p>
          </GlassCard>
          <GlassCard className="!bg-indigo-900/20">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-4">2</div>
            <h4 className="text-lg font-bold text-white mb-3">Start With the Launch Calendar</h4>
            <p className="text-slate-400 text-sm">Before opening AI Partner Accelerator, read the 30-Day Calendar. It maps exactly what to do each day \u2014 eliminating all guesswork.</p>
          </GlassCard>
          <GlassCard className="!bg-indigo-900/20">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold mb-4">3</div>
            <h4 className="text-lg font-bold text-white mb-3">Open the AI Copy Vault</h4>
            <p className="text-slate-400 text-sm">Use the 52 prompt templates from day one of the main program. They cut your content production time in half from the first session.</p>
          </GlassCard>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 mb-24">
        <GlassCard className="text-center border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Questions About Your Bonuses?</h3>
          <p className="text-slate-400">
            Email <a href={`mailto:${config.bonusEmail}`} className="text-indigo-400 hover:underline">{config.bonusEmail}</a> \u2014 {config.author.name} responds within 24 hours. For questions about the main AI Partner Accelerator program, use the official support inside your Digistore24 purchase dashboard.
          </p>
        </GlassCard>
      </div>

      <LegalFooter />
    </div>
  );
}
