import { motion } from 'motion/react';
import { Lock, MonitorSmartphone, Clock, BookOpen, HeartHandshake, CalendarCheck } from 'lucide-react';

const differentials = [
  {
    icon: Lock,
    title: "Sigilo Absoluto Garantido",
    description: "Tudo que é dito na sessão fica entre nós. Confidencialidade e ética profissional."
  },
  {
    icon: MonitorSmartphone,
    title: "Atendimento Online e Presencial",
    description: "Escolha o formato que melhor se adapta à sua rotina e necessidades."
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Sessões nos períodos da manhã, tarde e noite. Inclusive aos sábados."
  },
  {
    icon: BookOpen,
    title: "Abordagem Baseada em Evidências",
    description: "Terapia Cognitivo-Comportamental (TCC) com resultados comprovados cientificamente."
  },
  {
    icon: HeartHandshake,
    title: "Acolhimento Sem Julgamentos",
    description: "Espaço seguro para você ser quem realmente é, sem máscaras."
  },
  {
    icon: CalendarCheck,
    title: "Primeira Sessão Sem Compromisso",
    description: "Conheça o trabalho e veja se há identificação antes de seguir."
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">DIFERENCIAIS</span>
          <h2 className="text-3xl md:text-4xl font-bold">Por Que Escolher Atendimento Comigo?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4 text-primary-dark">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
