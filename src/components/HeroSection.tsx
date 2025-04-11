import React from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../lib/old-metal-lathe-machine.jpg"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-juk-dark overflow-hidden"
    >
      {/* Background overlay with blue tint */}
      <div className="absolute inset-0 bg-juk-dark opacity-90"></div>

      {/* Background image - replace with your actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Excelência em
            <br />
            <span className="text-juk-light">Tornearia Mecânica</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Soluções de precisão para suas necessidades industriais com a mais
            alta qualidade e tecnologia de ponta.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Solicitar Orçamento
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
            <a
              href="#services"
              className="btn-primary flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-juk-light/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
