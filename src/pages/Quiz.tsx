import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { GlassCard, Button, cn } from '../components/ui';

const quizData = [
  {
    q: "Where are you right now with making money online?",
    opts: [
      { id: 'A', text: "Complete beginner \u2014 never tried anything" },
      { id: 'B', text: "Tried a few things, earned almost nothing" },
      { id: 'C', text: "Making some money but not consistently" },
      { id: 'D', text: "Have side income and want to multiply it" }
    ]
  },
  {
    q: "What is your single biggest obstacle right now?",
    opts: [
      { id: 'A', text: "I don't know where to start or what to trust" },
      { id: 'B', text: "I start things but burn out before results come" },
      { id: 'C', text: "I struggle to get consistent traffic to my offers" },
      { id: 'D', text: "I make sales but can't scale without more hours" }
    ]
  },
  {
    q: "How much time can you honestly invest each week?",
    opts: [
      { id: 'A', text: "Under 5 hours \u2014 I have a busy life" },
      { id: 'B', text: "5 to 10 hours per week" },
      { id: 'C', text: "10 to 20 hours \u2014 I am motivated" },
      { id: 'D', text: "20+ hours \u2014 I am all in on this" }
    ]
  },
  {
    q: "What would consistent online income actually change for you?",
    opts: [
      { id: 'A', text: "Pay off debt and stop the paycheck-to-paycheck cycle" },
      { id: 'B', text: "Quit my 9-to-5 and work for myself" },
      { id: 'C', text: "Have real financial freedom and time independence" },
      { id: 'D', text: "Build lasting wealth for my family" }
    ]
  },
  {
    q: "What have you tried before that did not work?",
    opts: [
      { id: 'A', text: "Nothing yet \u2014 first attempt ever" },
      { id: 'B', text: "Dropshipping, ecommerce, or print-on-demand" },
      { id: 'C', text: "Standard affiliate marketing manually" },
      { id: 'D', text: "Freelancing or content creation" }
    ]
  }
];

const results = {
  A: {
    emoji: "\ud83d\ude80",
    headline: "You Are In the Perfect Position \u2014 Starting Fresh Is a Real Advantage",
    body: "Starting from zero means you have nothing wrong to unlearn. No bad habits. No burned bridges. No failed methods poisoning your perspective. That is genuinely valuable.\n\nThe single biggest mistake complete beginners make is trying to build everything manually \u2014 writing every email by hand, building every page from scratch, creating every piece of content themselves. It is exhausting. It is unsustainable. And it is completely unnecessary in 2026.\n\nThe AI affiliate system you are about to see was built specifically for people in your position. It assumes nothing. It teaches everything. And it puts AI in charge of the content workload so you can focus on making strategic decisions \u2014 not grinding out copy at midnight.\n\nOne clear path. No confusion. Your first step is below.",
    cta: "Show Me the Clear Path \u2192"
  },
  B: {
    emoji: "\ud83d\udd04",
    headline: "Your Past Failures Were Not Your Fault \u2014 Here Is What Was Missing",
    body: "You are not the problem. The method was.\n\nEvery affiliate marketing approach that requires you to manually write all the content, build all the pages, and produce all the copy \u2014 will fail. Not because of you. Because one person cannot produce enough volume to compete against well-resourced operations.\n\nThat is the wall you hit every time. You were trying to win a volume game with no volume advantage.\n\nAI changes that equation permanently. One person with the right AI system can now out-produce a team of ten manual content writers. The playing field flipped \u2014 and most people have not realized it yet.\n\nWhat you have been missing is not motivation or strategy. It is leverage. The right AI system gives you that leverage starting from day one.",
    cta: "Show Me What Changes Everything \u2192"
  },
  C: {
    emoji: "\ud83d\udcc8",
    headline: "You Have the Foundation \u2014 Now Add the Engine That Multiplies It",
    body: "You figured out the hardest part. Most people never even get this far.\n\nThe gap between where you are and consistent high-ticket income is almost never knowledge. It is speed. Volume. Automation. You know what to do \u2014 you just cannot do enough of it fast enough to reach the income level you want.\n\nAI is the multiplier you are missing. It takes what you already know and multiplies your output without multiplying your hours. More funnels. More content. More campaigns. In the same time you are already investing.\n\nThe complete AI affiliate system below shows experienced marketers exactly how to integrate AI as a production engine \u2014 not a toy they use occasionally. This is the infrastructure that turns effort into real, scalable income.",
    cta: "Show Me the Scaling System \u2192"
  }
};

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        if (currentQ < quizData.length - 1) {
          setCurrentQ(currentQ + 1);
        } else {
          setShowResult(true);
        }
        gsap.to(containerRef.current, { opacity: 1, y: 0, duration: 0.3 });
      }
    });
  };

  const getResult = () => {
    const counts = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    let max = 'A';
    for (const key of Object.keys(counts)) {
      if (counts[key] > (counts[max] || 0)) max = key;
    }
    
    if (max === 'D') return results.C;
    return results[max as keyof typeof results] || results.A;
  };

  return (
    <div className="min-h-screen py-16 px-4">
      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full border border-[#8b5cf6] bg-[#8b5cf6]/10 text-[#8b5cf6] font-bold text-sm mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          \ud83c\udfaf 60-SECOND QUIZ \u2014 GET YOUR PERSONALIZED RESULT
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Take the Free AI Income Quiz \u2014 Discover Your Personalized Path to Your First Affiliate Commission
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Answer 5 quick questions. Get an instant personalized result. Your exact next step \u2014 revealed in under 60 seconds.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[{v: "21,400+", l: "Quiz Completions"}, {v: "60 Seconds", l: "Average Completion Time"}, {v: "3 Profiles", l: "Personalized Results"}].map((s, i) => (
            <GlassCard key={i} className="py-4 px-6 !rounded-2xl">
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{s.l}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* QUIZ CONTAINER */}
      <div className="max-w-2xl mx-auto">
        {!showResult ? (
          <GlassCard>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-[#8b5cf6] font-bold mb-2">
                <span>Progress</span>
                <span>Question {currentQ + 1} of 5</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-all duration-500"
                  style={{ width: `${((currentQ) / 5) * 100}%` }}
                />
              </div>
            </div>

            <div ref={containerRef}>
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {quizData[currentQ].q}
              </h2>
              <div className="space-y-4 mb-8">
                {quizData[currentQ].opts.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 group hover:bg-[#6366f1]/10 hover:border-[#6366f1] hover:scale-[1.01]",
                      selected === opt.id 
                        ? "border-[#6366f1] bg-[#6366f1]/20 scale-[1.01]" 
                        : "border-slate-700/50 bg-slate-800/30"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                      selected === opt.id ? "bg-[#6366f1] text-white" : "bg-slate-700 text-slate-300 group-hover:bg-[#6366f1] group-hover:text-white"
                    )}>
                      {opt.id}
                    </div>
                    <span className="text-slate-200 font-medium">{opt.text}</span>
                  </button>
                ))}
              </div>
              <Button 
                className="w-full py-4 text-lg" 
                onClick={handleNext}
                disabled={!selected}
                variant={selected ? "primary" : "ghost"}
              >
                Next Question \u2192
              </Button>
            </div>
          </GlassCard>
        ) : (
          <GlassCard className="text-center" ref={containerRef}>
            <div className="text-6xl mb-6 inline-block">{getResult().emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              {getResult().headline}
            </h2>
            <div className="text-slate-300 space-y-4 mb-8 text-left leading-relaxed">
              {getResult().body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Button 
              className="w-full py-5 text-xl mb-4" 
              onClick={() => navigate('/optin')}
            >
              {getResult().cta}
            </Button>
            <Button 
              variant="ghost" 
              className="text-sm border-none shadow-none text-slate-500 hover:text-white bg-transparent"
              onClick={() => {
                setCurrentQ(0);
                setAnswers([]);
                setShowResult(false);
              }}
            >
              \u21ba Retake Quiz
            </Button>
          </GlassCard>
        )}
      </div>

      <footer className="mt-20 text-center text-sm text-slate-600">
        <p>\u00a9 2026 digitaltoolkt.com.ng | This quiz uses anonymous answer tracking to personalize your experience. No personal data is stored or shared.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
