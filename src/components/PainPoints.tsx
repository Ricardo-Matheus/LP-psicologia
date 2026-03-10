import { motion } from 'motion/react';
import { Frown, HeartCrack, Briefcase, MessageSquareOff, RefreshCw, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: AlertCircle,
    title: "Ansiedade que não te deixa em paz?",
    description: "Pensamentos acelerados, preocupação constante e sensação de que algo ruim vai acontecer."
  },
  {
    icon: Frown,
    title: "Tristeza profunda e falta de motivação?",
    description: "Dificuldade para sair da cama, desânimo e sensação de vazio."
  },
  {
    icon: HeartCrack,
    title: "Relacionamentos que te machucam?",
    description: "Conflitos constantes, dificuldade de se conectar ou relacionamentos tóxicos."
  },
  {
    icon: Briefcase,
    title: "Estresse e esgotamento no trabalho?",
    description: "Exaustão mental, irritabilidade e sinais de burnout."
  },
  {
    icon: MessageSquareOff,
    title: "Dificuldade para expressar sentimentos?",
    description: "Guarda tudo pra você e sente que ninguém te entende."
  },
  {
    icon: RefreshCw,
    title: "Pensamentos repetitivos e ruminação?",
    description: "Não consegue desligar a cabeça, principalmente à noite."
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Você Tem Se Sentido Assim?</h2>
          <p className="text-lg text-text-muted">
            Muitas vezes, carregamos pesos que não precisamos carregar sozinhos. Reconhecer esses sinais é o primeiro passo para a mudança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-soft p-8 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent-soft/30 flex items-center justify-center mb-6 text-accent">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-text-muted">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto bg-primary/10 p-8 md:p-12 rounded-3xl">
          <p className="text-xl md:text-2xl font-serif text-text-main mb-8 italic">
            "Se você se identificou com algum desses sentimentos, saiba que você não está sozinho(a). E mais importante: <strong className="text-primary-dark">você não precisa passar por isso sozinho(a)</strong>."
          </p>
          <a href="#agendar" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary-dark hover:bg-primary transition-colors rounded-xl shadow-md">
            Quero Começar Minha Terapia
          </a>
        </div>
      </div>
    </section>
  );
}
