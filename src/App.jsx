import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import UseCasesSection from './components/UseCasesSection';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const observerRef = useRef(null);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Custom Cursor Tracker & Intersection Observer for Animations
  useEffect(() => {
    if (loading) return;

    // Cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Intersection Observer for fade-in-up
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve if we only want it to animate once
          // observerRef.current.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading]);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-navy)'
      }}>
        {/* Animated Blinking Eye SVG for Loader */}
        <div style={{ width: '80px', height: '80px', animation: 'pulseIris 1s infinite alternate' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        id="custom-cursor"
        className={isHovering ? 'hovering' : ''}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <DemoSection />
      <UseCasesSection />
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
