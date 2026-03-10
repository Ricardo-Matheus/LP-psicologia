import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "ACOLHIMENTO SEM JULGAMENTOS",
    description: "Na primeira sessão, você compartilha suas questões em um espaço seguro e confidencial. Sem pressões, no seu tempo."
  },
  {
    number: "2",
    title: "ENTENDIMENTO E ESTRATÉGIAS",
    description: "Juntos, identificamos padrões de pensamento e comportamento. Desenvolvemos ferramentas práticas para lidar com suas dificuldades."
  },
  {
    number: "3",
    title: "TRANSFORMAÇÃO GRADUAL",
    description: "Sessão após sessão, você desenvolve autoconhecimento, regula emoções e reconstrói sua relação consigo mesmo(a) e com o mundo."
  }
];

export default function HowItHelps() {
  return (
    <section className="py-20 bg-bg-soft relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-10 left-10 text-accent opacity-20">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="currentColor" strokeWidth="4" fill="transparent" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 text-secondary opacity-20">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="5" fill="currentColor" />
          <circle cx="50" cy="20" r="5" fill="currentColor" />
          <circle cx="80" cy="20" r="5" fill="currentColor" />
          <circle cx="20" cy="50" r="5" fill="currentColor" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <circle cx="80" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">O PROCESSO</span>
          <h2 className="text-3xl md:text-4xl font-bold">Como Funciona o Processo Terapêutico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:border-primary/30 transition-colors"
            >
              <div className="text-6xl font-serif font-bold text-bg-soft mb-6 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-4 text-text-main">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-text-muted">
            "A terapia não é mágica, mas é um espaço onde você pode ser você mesmo(a), entender seus processos e construir uma vida mais leve e autêntica."
          </p>
        </div>
      </div>
    </section>
  );
}
