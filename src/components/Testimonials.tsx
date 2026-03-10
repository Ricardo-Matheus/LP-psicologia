import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Comecei a terapia com a Dra. Carolina em um momento muito difícil da minha vida. Ela me ajudou a entender minha ansiedade e hoje consigo lidar com situações que antes me paralisavam. Sou muito grata!",
    author: "Ana Paula M.",
    age: "32 anos",
    avatar: "https://picsum.photos/seed/ana/100/100"
  },
  {
    text: "Nunca tinha feito terapia e estava com muito receio. A Dra. Carol me deixou super à vontade desde a primeira sessão. Hoje, depois de 8 meses, posso dizer que me conheço muito melhor e estou mais leve.",
    author: "Rafael S.",
    age: "28 anos",
    avatar: "https://picsum.photos/seed/rafael/100/100"
  },
  {
    text: "Estava em um relacionamento tóxico e não conseguia sair. Com a terapia, entendi meus padrões e hoje estou em um relacionamento saudável. A Carol mudou minha vida!",
    author: "Juliana F.",
    age: "35 anos",
    avatar: "https://picsum.photos/seed/juliana/100/100"
  },
  {
    text: "O atendimento online foi uma surpresa positiva. Consigo fazer terapia do conforto da minha casa, sem perder tempo com deslocamento. Super recomendo!",
    author: "Marcos L.",
    age: "41 anos",
    avatar: "https://picsum.photos/seed/marcos/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">PROVA SOCIAL</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Meus Pacientes Dizem</h2>
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="text-sm font-semibold text-primary-dark">98% de satisfação dos pacientes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 pt-12 rounded-2xl shadow-sm relative mt-8"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex justify-center mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-text-muted text-center italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <h4 className="font-bold text-text-main">{testimonial.author}</h4>
                <span className="text-sm text-text-muted">{testimonial.age}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
