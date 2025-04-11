import React from "react";
import {
  Cog,
  Wrench,
  RotateCcw,
  ArrowUpRight,
  Cylinder,
  Gauge,
  Settings,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Cylinder size={40} />,
      title: "Tornearia CNC",
      description:
        "Produção de peças com alta precisão utilizando tornos CNC de última geração.",
    },
    {
      icon: <Cog size={40} />,
      title: "Usinagem Convencional",
      description:
        "Serviços de usinagem tradicional para diversos tipos de materiais e finalidades.",
    },
    {
      icon: <Settings size={40} />,
      title: "Fabricação de Peças",
      description:
        "Criação de peças personalizadas conforme especificação e necessidade do cliente.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Manutenção Industrial",
      description:
        "Serviços de manutenção preventiva e corretiva para equipamentos industriais.",
    },
    {
      icon: <Gauge size={40} />,
      title: "Retrofit de Máquinas",
      description:
        "Modernização de máquinas e equipamentos para melhor desempenho.",
    },
    {
      icon: <RotateCcw size={40} />,
      title: "Recuperação de Peças",
      description:
        "Recuperação e recondicionamento de peças danificadas ou desgastadas.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative">
          {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-juk-dark"></div> */}
          <h2 className="section-title pt-6">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para suas necessidades industriais
          </p>
          {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-juk-dark"></div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-juk-dark hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="text-juk-light mb-4 group-hover:text-juk-dark transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-juk-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-4 flex justify-end">
                <div className="text-juk-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
