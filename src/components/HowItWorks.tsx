import { motion } from 'motion/react';
import { Calendar, Link, Video, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "PASSO 1 - Agendamento",
    description: "Você escolhe o melhor dia e horário através do WhatsApp ou formulário."
  },
  {
    icon: Link,
    title: "PASSO 2 - Confirmação",
    description: "Envio link da videochamada (Google Meet/Zoom) e orientações."
  },
  {
    icon: Video,
    title: "PASSO 3 - Sessão",
    description: "No dia marcado, conectamos pela plataforma. Você no conforto da sua casa."
  },
  {
    icon: ArrowRight,
    title: "PASSO 4 - Continuidade",
    description: "Agendamos a próxima sessão e você segue sua jornada de autocuidado."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">PRATICIDADE</span>
          <h2 className="text-3xl md:text-4xl font-bold">Atendimento Online: Simples, Seguro e Eficaz</h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-bg-soft shadow-md flex items-center justify-center mb-6 text-primary-dark relative z-10">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-bg-soft p-8 rounded-2xl">
            <h3 className="font-bold text-xl mb-4 text-text-main">Requisitos Técnicos:</h3>
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Conexão estável de internet</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Computador, tablet ou celular</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Fone de ouvido (para privacidade)</li>
              <li className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Local tranquilo e privado</li>
            </ul>
          </div>
          <div className="bg-secondary/10 p-8 rounded-2xl flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-secondary">Segurança:</h3>
            <p className="text-text-muted leading-relaxed">
              "As plataformas utilizadas seguem rigorosos protocolos de segurança e privacidade, atendendo às normas do CFP (Conselho Federal de Psicologia)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
