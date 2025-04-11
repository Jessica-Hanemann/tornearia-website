import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { title: "Início", href: "#home" },
    { title: "Serviços", href: "#services" },
    { title: "Sobre", href: "#about" },
    { title: "Tecnologia", href: "#technology" },
    { title: "Qualidade", href: "#quality" },
    { title: "Depoimentos", href: "#testimonials" },
    { title: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-juk-dark text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1
            className={`text-2xl md:text-3xl font-bold ${
              scrolled ? "text-juk-dark" : "text-white"
            }`}
          >
            Juk <span className="text-juk-light">Torneiro</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${
                scrolled
                  ? "text-juk-dark hover:text-juk-light"
                  : "text-white hover:text-juk-light"
              } font-medium transition-colors duration-300`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-juk-dark" : "text-white"}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-juk-dark hover:text-juk-light font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
