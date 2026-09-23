import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import About from './components/About';
import Features from './components/Features';
import TechStack from './components/TechStack';
import BusinessModel from './components/BusinessModel';
import Partners from './components/Partners';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function SkyfusionLanding() {
  return (
    <div className="page-shell min-h-screen bg-slate-950 text-white">
      {/* Cursor magnético global */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsCounter />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Business Model Section */}
      <BusinessModel />

      {/* Partners Section */}
      <Partners />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}