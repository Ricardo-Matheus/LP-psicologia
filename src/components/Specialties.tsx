import { motion } from 'motion/react';
import { Brain, Heart, Users, Briefcase, Smile, RefreshCw } from 'lucide-react';

const specialties = [
  {
    icon: Brain,
    title: "Ansiedade e Síndrome do Pânico",
    description: "Técnicas para regular pensamentos ansiosos, respiração e controle de crises."
  },
  {
    icon: Heart,
    title: "Depressão e Questões Emocionais",
    description: "Acolhimento e estratégias para lidar com tristeza profunda e falta de motivação."
  },
  {
    icon: Users,
    title: "Relacionamentos e Vínculos",
    description: "Terapia individual ou de casal para fortalecer vínculos e resolver conflitos."
  },
  {
    icon: Briefcase,
    title: "Estresse e Burnout",
    description: "Gestão emocional para profissionais exaustos e sobrecarregados."
  },
  {
    icon: Smile,
    title: "Autoestima e Autoconhecimento",
    description: "Desenvolvimento pessoal, aceitação e construção de uma autoimagem saudável."
  },
  {
    icon: RefreshCw,
    title: "Transições de Vida",
    description: "Apoio em momentos de mudança: luto, separação, mudança de carreira, etc."
  }
];

export default function Specialties() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">ESPECIALIDADES</span>
          <h2 className="text-3xl md:text-4xl font-bold">Áreas de Atendimento Especializado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-bg-soft flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <spec.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main">{spec.title}</h3>
              <p className="text-text-muted leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
