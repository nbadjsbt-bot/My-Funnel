import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard, Button, AuthorInline, LegalFooter } from '../components/ui';
import { config } from '../config';

export default function Bridge() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".step-progress", { opacity: 0, y: 20, duration: 0.8, stagger: 0.2 });
    gsap.to(".check-path", { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", delay: 0.5 });
    gsap.from(".author-card", { y: 40, opacity: 0, duration: 0.8, delay: 0.4 });
    gsap.from(".story-block", { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, delay: 0.6 });
  });

  return (
    <div className="min-h-screen" ref={containerRef}>

      {/* CONFIRMATION HEADER */}
      <div className="max-w-3xl mx-auto text-center pt-16 pb-12 px-4">

        {/* PROGRESS STEPS */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-16">
          <div className="step-progress flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <span>Blueprint Requested</span>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-4 h-[2px] bg-emerald-500/40 rounded"></div>
            <div className="w-4 h-[2px] bg-emerald-500/40 rounded"></div>
          </div>

          <div className="step-progress flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/40 text-indigo-300 font-bold text-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
            <span>Check Your Email → Now</span>
          </div>

          <div className="flex items-center gap-1">
            <div className="w-4 h-[2px] bg-slate-700 rounded"></div>
            <div className="w-4 h-[2px] bg-slate-700 rounded"></div>
          </div>

          <div className="step-progress text-slate-500 font-bold text-sm flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">
              3
            </div>
            <span>Access the System</span>
          </div>
        </div>

        {/* SUCCESS ICON */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl scale-150"></div>
            <svg className="w-24 h-24 text-emerald-500 relative z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <circle cx="50" cy="50" r="45" className="stroke-emerald-500/20" />
              <circle cx="50" cy="50" r="45" className="stroke-emerald-500/40" strokeDasharray="283" strokeDashoffset="70" />
              <path
                className="check-path"
                strokeDasharray="100"
                strokeDashoffset="100"
                d="M30 50L45 65L70 35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* HEADLINE */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
          🎉 You're Officially In
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          You're In — Your Blueprint Is{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Arriving in Your Inbox Right Now
          </span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Check your email in the next 60 seconds. If it's not there, check your spam folder and move it to your primary inbox so you don't miss what's coming next.
        </p>

        {/* EMAIL TIPS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: "📧", text: "Check your inbox" },
            { icon: "🗂️", text: "Check spam folder" },
            { icon: "⭐", text: "Mark as important" }
          ].map((tip, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 text-sm text-slate-300">
              <span>{tip.icon}</span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AUTHOR CARD */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <GlassCard className="author-card !bg-indigo-900/20 border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300">
          <AuthorInline author={config.author} />
        </GlassCard>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-2xl mx-auto px-4 mb-20">
        <div className="space-y-6">

          <div className="story-block">
            <p className="text-slate-300 text-lg leading-relaxed">
              Before you check your email — I want to share something with you.
            </p>
          </div>

          <div className="story-block">
            <p className="text-slate-300 text-lg leading-relaxed">
              My name is <strong className="text-white">{config.author.name}</strong>. I review software and digital business systems at digitaltoolkt.com.ng. I have a rule I have never broken: I only recommend something I would personally tell a close friend to spend their hard-earned money on.
            </p>
          </div>

          <div className="story-block">
            <p className="text-white font-bold text-lg leading-relaxed">
              What I am about to tell you cleared that bar.
            </p>
          </div>

          <div className="story-block bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Imagine staring at a laptop at 11 PM. Fourteen months of trying. Three courses bought. Hundreds of YouTube videos watched. Zero to show for it. Not a lack of motivation. Not a lack of intelligence. Something more fundamental than that.
            </p>
          </div>

          <div className="story-block">
            <p className="text-slate-300 text-lg leading-relaxed">
              The problem is the volume requirement. Affiliate marketing at real scale requires an enormous, continuous output of content — emails, pages, articles, ads, follow-up sequences. One person writing everything manually cannot produce enough volume to compete. They burn out at exactly the point where momentum should be building.
            </p>
            <p className="text-indigo-300 font-semibold text-lg leading-relaxed mt-4">
              That is the trap. And it is the real reason most people quit before they ever see results.
            </p>
          </div>

          <div className="story-block bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              While reviewing AI tools for digitaltoolkt.com.ng, the editorial team found a system that flips this equation permanently. Instead of AI being a helper that assists occasionally, this system makes AI the primary content engine. The human becomes the strategic director.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: "✉️", text: "AI writes the emails" },
                { icon: "📄", text: "AI builds bridge pages" },
                { icon: "📝", text: "AI creates all copy" },
                { icon: "🎯", text: "You review and deploy" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-indigo-500/10 rounded-xl px-3 py-2">
                  <span>{item.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="story-block">
            <p className="text-slate-300 text-lg leading-relaxed">
              The workload drops from physically unsustainable to manageable in a single afternoon.
            </p>
          </div>

          <div className="story-block bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
            <div className="space-y-3">
              {[
                "The person who spent weekends writing five emails now produces twenty in an hour.",
                "The person who avoided review content because it took too long publishes three articles in an afternoon.",
                "The funnel that would have taken three months to build manually gets built in a weekend."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-xs">✓</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="story-block">
            <p className="text-slate-300 text-lg leading-relaxed">
              And the income that never arrived when everything was done manually starts showing up when the right volume of content is finally in market. This is not magic. It is leverage. More content, better structured, deployed faster — produces more results. AI makes that math possible for a single person without a team, without a budget, and without burning out.
            </p>
          </div>

          <div className="story-block bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6">
            <p className="text-white font-bold text-xl leading-relaxed">
              I put together a complete review of the AI affiliate system behind all of this. Every module. Every cost. Every honest pro and every genuine con. Read it below before you decide anything — I want you to have the full picture.
            </p>
          </div>

        </div>
      </div>

      {/* CTA TO REVIEW */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/70 to-transparent z-10" />
          <img
            src={config.images.bridge}
            alt="Review Preview"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">
              📋 Full Honest Review Inside
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Read My Complete Review Before You Decide Anything
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Covers every module, the full cost, 8 honest pros, 4 real cons, and the exclusive bonus package only available through this page.
            </p>
            <Button to="/review" className="py-4 px-8 text-lg w-full md:w-auto inline-block">
              Show Me the Full Review + Bonus Stack →
            </Button>
            <p className="text-sm text-slate-500 mt-4">Free to read. No obligation.</p>
          </div>
        </div>
      </div>

      {/* AI TIP SECTION */}
      <div className="max-w-2xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            ⚡
          </div>
          <h3 className="text-xl font-bold text-white">
            While You Wait — Your First AI Tip:
          </h3>
        </div>

        <GlassCard className="!bg-indigo-900/10 border-indigo-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🤖</span>
            <h4 className="text-indigo-400 font-bold text-lg">
              The 4-Minute Affiliate Email — AI Writes It, You Publish It
            </h4>
          </div>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              Open any AI writing tool right now — ChatGPT, Claude, or Gemini all work.
            </p>
            <p>Paste this prompt and fill in the brackets:</p>

            <div className="bg-slate-900/80 p-5 rounded-xl border border-indigo-500/20 text-emerald-400 font-mono text-sm leading-relaxed">
              "Write a 220-word affiliate marketing email promoting [YOUR PRODUCT NAME] to [YOUR TARGET AUDIENCE]. Open with the single most painful daily problem this audience experiences. In the second paragraph, show how this product solves that exact problem. Close with one clear call to action. Tone: direct, warm, conversational. No hype language. No exaggerated claims."
            </div>

            <p>Fill in your product and audience. Hit generate. Read what comes back.</p>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-300 font-semibold">
                ✓ You just produced a complete, high-quality affiliate email in under 4 minutes — the same email that most affiliate marketers spend 45 minutes writing manually.
              </p>
            </div>

            <p>
              Now imagine running that prompt for every email in a 5-part sequence. Every bridge page. Every review article. Every ad you need to write. All in a single afternoon.
            </p>

            <p className="text-white font-semibold">
              That is the core of the leverage the full system teaches — and it goes 10 levels deeper than this one prompt.
            </p>
          </div>
        </GlassCard>
      </div>

      <LegalFooter />
    </div>
  );
}
