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
  });

  return (
    <div className="min-h-screen py-16 px-4" ref={containerRef}>
      {/* CONFIRMATION HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center gap-4 text-sm font-bold mb-12">
          <div className="step-progress text-emerald-400 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">\u2713</div>
            Blueprint Requested
          </div>
          <div className="w-8 h-[2px] bg-emerald-500/30"></div>
          <div className="step-progress text-indigo-400 flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            Check Your Email \u2190 Now
          </div>
          <div className="w-8 h-[2px] bg-slate-800"></div>
          <div className="step-progress text-slate-500">Access the System</div>
        </div>

        <div className="mb-8 flex justify-center">
          <svg className="w-24 h-24 text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
            <circle cx="50" cy="50" r="45" className="stroke-emerald-500/20" />
            <path className="check-path" strokeDasharray="100" strokeDashoffset="100" d="M30 50L45 65L70 35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          You're In \u2014 Your Blueprint Is Arriving in Your Inbox Right Now
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Check your email in the next 60 seconds. If it's not there, check your spam folder and move it to your primary inbox so you don't miss what's coming next.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-16">
        <GlassCard className="author-card !bg-indigo-900/20 border-indigo-500/30">
          <AuthorInline author={config.author} />
        </GlassCard>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-2xl mx-auto prose prose-invert prose-lg text-slate-300 leading-relaxed mb-16">
        <p>Before you check your email \u2014 I want to share something with you.</p>
        <p>My name is {config.author.name}. I review software and digital business systems at digitaltoolkt.com.ng. I have a rule I have never broken: I only recommend something I would personally tell a close friend to spend their hard-earned money on.</p>
        <p>What I am about to tell you cleared that bar.</p>
        
        <p>Imagine staring at a laptop at 11 PM. Fourteen months of trying. Three courses bought. Hundreds of YouTube videos watched. Zero to show for it. Not a lack of motivation. Not a lack of intelligence. Something more fundamental than that.</p>
        <p>The problem is the volume requirement. Affiliate marketing at real scale requires an enormous, continuous output of content \u2014 emails, pages, articles, ads, follow-up sequences. One person writing everything manually cannot produce enough volume to compete. They burn out at exactly the point where momentum should be building. That is the trap. And it is the real reason most people quit before they ever see results.</p>
        
        <p>While reviewing AI tools for digitaltoolkt.com.ng, the editorial team found a system that flips this equation permanently. Instead of AI being a helper that assists occasionally, this system makes AI the primary content engine. The human becomes the strategic director. AI writes the emails. AI produces the bridge pages. AI builds every piece of copy the funnel needs. The human reviews, approves, deploys.</p>
        <p>The workload drops from physically unsustainable to manageable in a single afternoon.</p>
        
        <p>The person who spent weekends writing five emails now produces twenty in an hour. The person who avoided review content because it took too long publishes three articles in an afternoon. The funnel that would have taken three months to build manually gets built in a weekend.</p>
        <p>And the income that never arrived when everything was done manually starts showing up when the right volume of content is finally in market. This is not magic. It is leverage. More content, better structured, deployed faster \u2014 produces more results. AI makes that math possible for a single person without a team, without a budget, and without burning out.</p>
        
        <p className="text-white font-bold text-xl mt-8">I put together a complete review of the AI affiliate system behind all of this. Every module. Every cost. Every honest pro and every genuine con. Read it below before you decide anything \u2014 I want you to have the full picture.</p>
      </div>

      {/* CTA TO REVIEW */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <div className="rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] to-transparent z-10" />
          <img src={config.images.bridge} alt="Review Preview" className="w-full h-[400px] object-cover" />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Read My Complete Review Before You Decide Anything</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Covers every module, the full cost, 8 honest pros, 4 real cons, and the exclusive bonus package only available through this page.</p>
            <Button to="/review" className="py-4 px-8 text-lg w-full md:w-auto">
              Show Me the Full Review + Bonus Stack \u2192
            </Button>
            <p className="text-sm text-slate-500 mt-4">Free to read. No obligation.</p>
          </div>
        </div>
      </div>

      {/* IMMEDIATE VALUE */}
      <div className="max-w-2xl mx-auto mb-24">
        <h3 className="text-xl font-bold text-white mb-6">While You Wait for Your Email \u2014 Your First AI Tip:</h3>
        <GlassCard className="!bg-indigo-900/10 border-indigo-500/20">
          <h4 className="text-indigo-400 font-bold mb-4">The 4-Minute Affiliate Email \u2014 AI Writes It, You Publish It</h4>
          <div className="prose prose-invert prose-sm text-slate-300">
            <p>Open any AI writing tool right now \u2014 ChatGPT, Claude, or Gemini all work.</p>
            <p>Paste this prompt and fill in the brackets:</p>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-emerald-400 font-mono text-sm my-4">
              "Write a 220-word affiliate marketing email promoting [YOUR PRODUCT NAME] to [YOUR TARGET AUDIENCE]. Open with the single most painful daily problem this audience experiences. In the second paragraph, show how this product solves that exact problem. Close with one clear call to action. Tone: direct, warm, conversational. No hype language. No exaggerated claims."
            </div>
            <p>Fill in your product and audience. Hit generate. Read what comes back.</p>
            <p>You just produced a complete, high-quality affiliate email in under 4 minutes \u2014 the same email that most affiliate marketers spend 45 minutes writing manually.</p>
            <p>Now imagine running that prompt for every email in a 5-part sequence. Every bridge page. Every review article. Every ad you need to write. All in a single afternoon.</p>
            <p>That is the core of the leverage the full system teaches \u2014 and it goes 10 levels deeper than this one prompt.</p>
          </div>
        </GlassCard>
      </div>

      <LegalFooter />
    </div>
  );
}
