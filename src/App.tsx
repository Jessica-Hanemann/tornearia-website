// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <AboutSection />
        <TechnologySection />
        <QualitySection />
        <TestimonialsSection />
        <MapaSection />
        <ContactSection /> */}
      </main>
      {/* <Footer />
      <WhatsAppButton phoneNumber="+5511999999999" /> */}
    </div>
  );
}

export default App;
