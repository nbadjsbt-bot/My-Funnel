import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import Quiz from './pages/Quiz';
import Optin from './pages/Optin';
import Bridge from './pages/Bridge';
import Review from './pages/Review';
import Bonus from './pages/Bonus';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080d1a] text-slate-200 animated-gradient-bg">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/optin" element={<Optin />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/review" element={<Review />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
