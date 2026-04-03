import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlassCard, Button, LegalFooter } from '../components/ui';
import { config } from '../config';

export default function Review() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-h1", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".verdict-box", { scale: 0.9, opacity: 0, duration: 0.6, delay: 0.4 });
    
    gsap.utils.toArray('.module-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 30, opacity: 0, duration: 0.5, delay: i * 0.1
      });
    });

    gsap.utils.toArray('.bonus-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        x: -30, opacity: 0, duration: 0.6, delay: i * 0.1
      });
    });
  });

  const modules = [
    { title: "Module 1: The AI Affiliate Foundation", desc: "Understand exactly how AI changes the affiliate marketing landscape. Map out your high-level strategy without relying on massive audiences or organic reach. Establish the mindset needed to treat AI as an engine rather than a toy." },
    { title: "Module 2: Selecting Your High-Ticket Product", desc: "Learn the exact criteria for selecting affiliate products that pay $200 to $1,000+ per sale. Bypass crowded consumer markets and find the B2B or specialized offers with high conversion rates. Avoid the trap of promoting low-ticket items that require impossible volume." },
    { title: "Module 3: The AI Content Engine Setup", desc: "Configure your AI tools properly to match your exact voice and objective. Create the base prompts that will power your entire funnel production process. Connect the pieces so you never start from a blank page again." },
    { title: "Module 4: Building Your AI-Powered Funnel", desc: "Deploy the specific 3-page funnel architecture that converts cold traffic into high-ticket sales. Let AI write every headline, bullet point, and call to action on your opt-in and bridge pages. Assemble the technical pieces in a weekend." },
    { title: "Module 5: AI Email Marketing Mastery", desc: "Generate a complete, high-converting 5-part follow-up sequence in less than 20 minutes. Structure emails that build real trust rather than just pushing for a sale. Automate the sending process so your business runs while you sleep." },
    { title: "Module 6: Driving Your First Traffic", desc: "Implement zero-budget traffic methods designed specifically for new affiliate marketers. Deploy targeted AI-assisted content that attracts ready-to-buy prospects. Start testing different angles immediately with the high-volume production AI provides." },
    { title: "Module 7: Scaling With AI Automation", desc: "Once the first commissions arrive, learn how to reinvest profits into scalable traffic sources. Use AI to multiply your winning angles across different platforms. Transform a side-income stream into a serious affiliate business." },
    { title: "Module 8: Tracking, Payments, and Growth", desc: "Set up the international payment infrastructure needed to receive commissions anywhere. Track the metrics that actually matter without getting lost in complex spreadsheets. Optimize the weakest points of your funnel systematically." }
  ];

  const pros = [
    { title: "AI as the Primary Engine", desc: "This is not a traditional course with a tiny 'AI section' tacked on. The entire methodology relies on AI to do the heavy lifting of content creation." },
    { title: "Fixes the Volume Problem", desc: "Most affiliates fail because they can't produce enough content manually to compete. This system completely solves that fatal bottleneck." },
    { title: "Zero Audience Required", desc: "You don't need followers, a big email list, or social media clout. The strategies are built for people starting from absolute scratch today." },
    { title: "Focuses on High-Ticket", desc: "Earning $1,000 requires one sale of a high-ticket product, not 100 sales of a $10 ebook. This math is much easier for beginners to achieve." },
    { title: "No Website Needed", desc: "The funnel structure is entirely hosted and simplified. You bypass the technical headaches of WordPress management and plugin conflicts." },
    { title: "Fast Implementation", desc: "Because AI handles the writing and funnel copy, what normally takes three months to build can genuinely be deployed in a single weekend." },
    { title: "Global Access", desc: "The payment and tracking systems taught work internationally. You can participate and earn USD regardless of your home country." },
    { title: "Beginner Friendly", desc: "It assumes you know nothing about affiliate marketing or AI. Every step is documented clearly without overwhelming technical jargon." },
    { title: "Clear Action Steps", desc: "There is very little 'fluff' or theory. It is a highly practical, step-by-step execution plan designed for immediate momentum." }
  ];

  const cons = [
    { title: "Requires Real Effort", desc: "AI does the content writing, but you still have to set up the systems, review the output, and drive the traffic. This is not a 'push button' magic trick." },
    { title: "Not Cheap", desc: "At $997, it is a significant investment. While the value justifies the cost, it may be out of reach for those looking for a $10 solution." },
    { title: "Traffic Takes Time", desc: "Even with AI, the zero-budget traffic methods will take 60 to 90 days to gain real traction. You must be patient during the initial phase." },
    { title: "Tool Costs", desc: "You will need to invest a small amount monthly in AI tools and funnel software to run the system properly. Budget an extra $50/month." }
  ];

  const faqs = [
    { q: "Is AI Partner Accelerator legitimate or is it another internet scam?", a: "It is a fully legitimate training program hosted on Digistore24, a major international retailer. Skepticism is healthy in this industry, but the core strategy here \u2014 using AI to multiply content output for affiliate offers \u2014 is mathematically sound and currently used by top agencies worldwide." },
    { q: "Do I need technical experience or a website to get started?", a: "No technical experience is required. You do not need to build a complex website, write code, or manage servers. The program shows you how to use simple, modern funnel builders where the AI provides the copy and you just paste it in." },
    { q: "Realistically how long before I earn my first commission?", a: "If you implement the zero-budget traffic methods consistently, expect 60 to 90 days before seeing real traction. Anyone promising overnight wealth is lying to you. This is a real business infrastructure that takes a few months to mature." },
    { q: "Does this work from anywhere in the world?", a: "Yes. The program specifically covers how to set up international tracking and payment receipt via Digistore24. You can build this business and earn commissions regardless of your geographic location." },
    { q: "What payment methods work on the Digistore24 checkout page?", a: "Digistore24 accepts all major international credit cards, debit cards, and PayPal. The checkout is fully secure, encrypted, and handles the currency conversion automatically." },
    { q: "What if I buy and it is not right for me \u2014 can I get a refund?", a: "Digistore24 provides a robust buyer protection policy and manages all refunds independently of the vendor. Always verify the specific guarantee terms on the final checkout page before completing your purchase." },
    { q: "How is this different from the free affiliate marketing content on YouTube?", a: "YouTube provides scattered, disconnected tactics that often contradict each other. This program is a linear, unified system where every step builds on the last, and the specific AI integration is far deeper than typical free tutorials." },
    { q: "When do I receive my bonus package from Charles Izuma?", a: "Forward your Digistore24 receipt email to bonuses@digitaltoolkt.com.ng immediately after purchase. The complete $405 bonus package will be delivered directly to your inbox within 24 hours." }
  ];

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4" ref={containerRef}>
      {/* AFFILIATE DISCLOSURE */}
      <div className="bg-amber-100 text-amber-900 border-b-2 border-amber-400 py-3 px-4 text-center text-sm font-semibold fixed top-0 left-0 right-0 z-50">
        Affiliate Disclosure: This review contains affiliate links. If you purchase through our link, digitaltoolkt.com.ng earns a commission at no extra cost to you. This does not affect our editorial review \u2014 we only recommend products that meet our strict standards.
      </div>

      {/* HERO */}
      <div className="max-w-4xl mx-auto pt-20 mb-16 text-center">
        <img src={config.images.reviewHero} alt="Review Hero" className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl mb-8 border-4 border-slate-800 shadow-2xl" />
        <h1 className="hero-h1 text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          AI Partner Accelerator Review 2026: I Tested This AI Affiliate System For 30 Days \u2014 Here Is Every Detail You Need to Make the Right Decision
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mb-6">
          <img src={config.author.photo} alt={config.author.name} className="w-12 h-12 rounded-full border-2 border-indigo-500" />
          <span>By {config.author.name}, Senior Editor \u2014 digitaltoolkt.com.ng</span>
          <span className="hidden md:inline">|</span>
          <span>Published: April 2026 | Updated: April 2026 | 12-minute read</span>
        </div>
        <div className="text-2xl text-yellow-400 tracking-widest mb-2">\u2605\u2605\u2605\u2605\u00bd</div>
        <div className="text-white font-bold">4.7/5 \u2014 {config.author.name}'s Score</div>
      </div>

      {/* VERDICT */}
      <div className="max-w-3xl mx-auto mb-20">
        <GlassCard className="verdict-box !bg-slate-900/80 border-l-4 border-l-emerald-500">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Verdict \u2014 For Readers Who Won't Read Everything</h2>
          <ul className="space-y-4 mb-8 text-slate-300">
            <li className="flex gap-3"><span className="text-emerald-500">\u2705</span> AI Partner Accelerator is the most complete AI-powered affiliate system {config.author.name} has reviewed on digitaltoolkt.com.ng in 2026.</li>
            <li className="flex gap-3"><span className="text-emerald-500">\u2705</span> Best suited for complete beginners and people who burned out from manual content workload in previous attempts.</li>
            <li className="flex gap-3"><span className="text-emerald-500">\u2705</span> Buyers through this page receive an exclusive $405 bonus package from digitaltoolkt.com.ng \u2014 delivered within 24 hours of purchase.</li>
          </ul>
          <Button variant="ghost" onClick={scrollToCTA} className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white">
            Jump to Verdict + Bonus Stack \u2192
          </Button>
        </GlassCard>
      </div>

      {/* BODY CONTENT */}
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-indigo mb-24">
        <h2>What Is AI Partner Accelerator and What Does It Actually Teach?</h2>
        <p>AI Partner Accelerator is a comprehensive digital training program and operating system hosted on Digistore24. The core promise is straightforward: it teaches you how to build a highly profitable affiliate marketing business by replacing manual content creation with AI automation.</p>
        <p>Most traditional affiliate courses teach you to grind \u2014 write articles, record videos, manually build funnels, and craft endless email sequences. AI Partner Accelerator flips that model. It provides the exact frameworks, prompts, and architectures needed to make AI tools act as your full-time copywriter and funnel builder.</p>
        <p>It is specifically designed for complete beginners and intermediate marketers who previously failed because they could not sustain the sheer volume of content required to gain traction online. By solving the "volume problem," this system allows a single person working a few hours a week to output the same quality and quantity of marketing material as a small agency.</p>
        
        <h2>Who Should Buy This \u2014 And Who Should Skip It?</h2>
        <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
          <GlassCard className="!bg-emerald-900/10 border-emerald-500/20">
            <h3 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">\u2705 BUY THIS IF:</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>\u2022 You have never earned a dollar online and want a direct path.</li>
              <li>\u2022 You tried affiliate marketing before but burned out manually writing content.</li>
              <li>\u2022 You have 5 to 10 hours a week to invest consistently.</li>
              <li>\u2022 You understand that real businesses take 60-90 days to gain traction.</li>
              <li>\u2022 You want to promote high-ticket products ($200+ commissions).</li>
              <li>\u2022 You are willing to follow instructions without overcomplicating things.</li>
            </ul>
          </GlassCard>
          <GlassCard className="!bg-rose-900/10 border-rose-500/20">
            <h3 className="text-rose-400 font-bold mb-4 flex items-center gap-2">\u274c DO NOT BUY THIS IF:</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>\u2022 You are looking for a "get rich quick by Friday" scheme.</li>
              <li>\u2022 You are completely broke and cannot afford the $997 investment.</li>
              <li>\u2022 You refuse to use AI tools like ChatGPT or Claude.</li>
              <li>\u2022 You are already making $10k/month consistently with your own established affiliate systems.</li>
            </ul>
          </GlassCard>
        </div>

        <h2>Inside AI Partner Accelerator \u2014 Module by Module Breakdown</h2>
        <div className="space-y-6 my-8 not-prose">
          {modules.map((m, i) => (
            <GlassCard key={i} className="module-card !p-6 border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
            </GlassCard>
          ))}
        </div>
        <p className="text-sm italic text-slate-500">Module details based on curriculum as reviewed in April 2026. Verify current curriculum on the official program page.</p>

        <h2 className="mt-16">My Honest Pros and Cons \u2014 The Full Unfiltered Picture</h2>
        <div className="grid md:grid-cols-2 gap-12 my-8 not-prose">
          <div>
            <h3 className="text-emerald-400 font-bold text-xl mb-6 flex items-center gap-2">\u2705 THE PROS</h3>
            <div className="space-y-6">
              {pros.map((p, i) => (
                <div key={i}>
                  <h4 className="text-white font-bold mb-1">{p.title}</h4>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-rose-400 font-bold text-xl mb-6 flex items-center gap-2">\u26a0\ufe0f THE CONS</h3>
            <div className="space-y-6">
              {cons.map((c, i) => (
                <div key={i}>
                  <h4 className="text-white font-bold mb-1">{c.title}</h4>
                  <p className="text-sm text-slate-400">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2>How Much Does AI Partner Accelerator Cost in 2026?</h2>
        <p>The total investment for the complete AI Partner Accelerator system is a one-time payment of $997. For those who prefer to split the cost, there is a payment plan option of 3 monthly payments of $397.</p>
        <p>This includes full lifetime access to all core training modules, the AI prompt libraries, the funnel templates, and any future updates to the core curriculum. Your purchase is processed securely via Digistore24, which also manages the official money-back guarantee (verify exact terms on the checkout page before purchasing).</p>
        <p>While $997 is a premium price point, it is positioned correctly for the market. You are not buying a simple PDF; you are investing in a complete operational infrastructure that replaces thousands of dollars in agency fees or thousands of hours in manual labor.</p>
      </div>

      {/* BONUSES */}
      <div className="max-w-4xl mx-auto mb-24" id="cta-section">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6">Buy Through This Page \u2014 Get $405 in Exclusive Bonuses Free</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            These bonuses are completely exclusive to purchases made through digitaltoolkt.com.ng. I created and curated these specifically to cover any gaps in the main program. They are not available anywhere else, and they will be delivered to your inbox within 24 hours of your purchase.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {[
            { i: "\ud83d\udcdd", n: "The AI Affiliate Copy Vault", v: "$97", d: "52 done-for-you AI prompt templates for every piece of affiliate copy needed \u2014 10 email sequence prompts, 8 bridge page scripts, 12 review article frameworks, 6 YouTube ad scripts, 10 social ad copy prompts, and 6 testimonial request emails. Every prompt tested to produce high-converting copy on the first AI pass. Delivered as a formatted PDF and Notion template. Compatible with ChatGPT, Claude, and Gemini. Use from day one of the main program." },
            { i: "\ud83d\udcc5", n: "The 30-Day AI Affiliate Launch Calendar", v: "$67", d: "Day-by-day action plan for the first 30 days implementing AI Partner Accelerator. One specific task per day \u2014 no guesswork, no decision fatigue. Days 1-7: account and tool setup. Days 8-14: first funnel build. Days 15-21: email sequence launch and traffic deployment. Days 22-30: optimization and first commission tracking. Delivered as printable PDF checklist and interactive Notion dashboard. Built specifically around the AI Partner Accelerator module sequence." },
            { i: "\ud83d\udd0d", n: "The High-Ticket Product Research Database", v: "$97", d: "Pre-researched database of 38 high-ticket affiliate products across top Digistore24 categories \u2014 digital business, health, finance, and software. Each entry includes commission rate, conversion benchmark, demand assessment, and editorial note on promotional strength. Updated quarterly. Replaces 20+ hours of product research for new affiliate marketers and immediately narrows the field to products worth promoting. Available as searchable spreadsheet and formatted PDF." },
            { i: "\ud83d\udcca", n: "The Zero-Budget Traffic Playbook", v: "$97", d: "Complete guide to driving affiliate traffic without spending on ads \u2014 three methods in full detail. Method 1: AI-powered SEO review content ranking in Google within 60-90 days. Method 2: short-form video strategy for brand-new channels with zero subscribers. Method 3: community posting strategy for forums without account bans. Each method includes weekly action template and 90-day milestone tracker. Choose the method that fits available time and implement from week one." },
            { i: "\ud83d\udcb0", n: "The Affiliate Commission Tracking Spreadsheet", v: "$47", d: "Professional Google Sheets dashboard tracking every affiliate business metric \u2014 traffic source performance, email open and click rates, conversion rates by funnel stage, daily and monthly commissions, ad spend versus revenue, and 90-day income projections based on actual data. Copy to Google Drive in one click. No spreadsheet skills required. Start entering numbers from day one of the main program. Updated as the business grows without needing a new template." }
          ].map((b, i) => (
            <GlassCard key={i} className="bonus-card flex flex-col md:flex-row gap-6 items-start border-l-4 border-l-indigo-500">
              <div className="text-4xl bg-indigo-900/30 p-4 rounded-2xl">{b.i}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{b.n}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-indigo-500/20 text-indigo-300">Value: {b.v} \u2014 FREE</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{b.d}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="text-center bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/50 transform hover:scale-105 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-2">Total Exclusive Bonus Value</h3>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-2">$405</div>
          <p className="text-lg text-emerald-400 font-bold mb-4">Your Additional Cost: $0</p>
          <p className="text-slate-300 mb-6">All 5 bonuses free when you purchase AI Partner Accelerator through this page.</p>
          <div className="bg-black/30 p-4 rounded-xl text-sm text-slate-400 text-left">
            <strong>How to Claim:</strong> After purchase, email your Digistore24 receipt to <span className="text-white">{config.bonusEmail}</span> with subject line "AI Partner Bonus Claim." {config.author.name} will deliver all 5 bonuses within 24 hours.
          </div>
        </GlassCard>
      </div>

      {/* FINAL VERDICT */}
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-indigo mb-24">
        <h2>My Final Verdict \u2014 Should You Buy AI Partner Accelerator in 2026?</h2>
        <p>After testing the methodology, reviewing every module, and running the AI prompts myself, my verdict is a definitive yes.</p>
        <p>If you have struggled to make affiliate marketing work in the past, it was almost certainly due to the overwhelming volume of content required to compete. AI Partner Accelerator solves this exact problem permanently. It takes the heavy lifting out of the equation and allows you to operate at the scale of a small team while working alone for a few hours a week.</p>
        <p>Yes, $997 is a serious investment. Yes, you will still need to put in real effort to deploy the systems and drive the traffic. This is not a magic pill that deposits money into your bank account while you sleep on day one.</p>
        <p>But as a complete infrastructure for building a high-ticket affiliate business in 2026, it is unmatched. Add in the $405 exclusive bonus stack designed specifically to accelerate your launch, and the value proposition is overwhelmingly clear.</p>
        <p>If you are ready to stop consuming free YouTube tutorials and start building a real, automated affiliate engine, this is the system you need.</p>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto mb-24 bg-[#080d1a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">Ready? Here Is Exactly What Happens When You Click the Button Below</h2>
          <div className="grid gap-4 max-w-2xl mx-auto mb-12 text-left">
            {[
              "Click the button \u2014 land on the secure official program checkout powered by Digistore24",
              "Complete purchase in under 2 minutes with any major payment method",
              "Receive instant access to the full AI Partner Accelerator program",
              `Email receipt to ${config.bonusEmail} with 'AI Partner Bonus Claim'`,
              "Receive all 5 bonuses within 24 hours and start implementing"
            ].map((step, i) => (
              <GlassCard key={i} className="!p-4 flex gap-4 items-center !bg-slate-900/60">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white flex-shrink-0">{i + 1}</div>
                <div className="text-slate-300 font-medium">{step}</div>
              </GlassCard>
            ))}
          </div>
          
          <Button href={config.affiliateLink} target="_blank" rel="nofollow sponsored" className="w-full max-w-xl py-6 text-xl mb-6 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]">
            {config.ctaText}
          </Button>
          <p className="text-slate-400 text-sm">\ud83d\udd12 Secure Checkout via Digistore24 | Money-Back Guarantee | Instant Access</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Questions Charles Gets Asked Most Before Readers Decide</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <GlassCard key={i} className="!p-0 overflow-hidden cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="p-6 flex justify-between items-center bg-slate-800/30 hover:bg-slate-800/50 transition">
                <h3 className="font-bold text-white pr-4">{faq.q}</h3>
                <div className={`text-indigo-400 transform transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</div>
              </div>
              <div 
                className="px-6 text-slate-400 overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openFaq === i ? '200px' : '0', paddingBottom: openFaq === i ? '1.5rem' : '0' }}
              >
                {faq.a}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 z-50">
        <Button href={config.affiliateLink} target="_blank" rel="nofollow sponsored" className="w-full text-sm py-3">
          Get AI Partner Accelerator + $405 Bonuses \u2192
        </Button>
      </div>

      <LegalFooter />
    </div>
  );
}
