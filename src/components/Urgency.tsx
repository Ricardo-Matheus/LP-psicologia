import { motion } from 'motion/react';
import { Clock, AlertCircle } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-accent/10 border-2 border-accent/30 p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h2 className="text-xl md:text-2xl font-bold text-text-main uppercase tracking-wide">
                  Vagas Limitadas - Março 2026
                </h2>
              </div>
              
              <p className="text-lg text-text-muted mb-6">
                Atualmente tenho <strong className="text-accent">apenas 5 vagas disponíveis</strong> para novos pacientes, nos seguintes horários:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center bg-white/60 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span className="font-medium text-text-main">Segundas e Quartas: 19h</span>
                </li>
                <li className="flex items-center bg-white/60 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span className="font-medium text-text-main">Terças: 14h e 20h</span>
                </li>
                <li className="flex items-center bg-white/60 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-accent mr-3 shrink-0" />
                  <span className="font-medium text-text-main">Sábados: 9h</span>
                </li>
              </ul>
              
              <p className="text-sm text-text-muted italic">
                * Agenda atualizada em tempo real.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0">
              <a href="#agendar" className="block w-full md:w-auto px-8 py-5 text-center text-lg font-bold text-white bg-accent hover:bg-accent/90 transition-colors rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Garantir Minha Vaga Agora
              </a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
