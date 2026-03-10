import { motion } from 'motion/react';
import { Calendar, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-bg-soft">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-accent-soft/30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
              <span className="text-sm font-semibold tracking-wider text-primary-dark uppercase">
                CRP 08/12345 - Psicóloga Registrada
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Psicoterapia Online e Presencial: Cuide da Sua Saúde Mental com Acolhimento
            </h1>
            
            <p className="text-base md:text-lg text-text-muted mb-8 leading-relaxed">
              Atendimento psicológico especializado em ansiedade, depressão e relacionamentos. Sessões online para todo o Brasil com a Dra. Carolina Ribeiro.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <a href="#agendar" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white bg-primary-dark hover:bg-primary transition-colors rounded-xl shadow-md text-center">
                <Calendar className="w-5 h-5 mr-2 shrink-0" />
                <span>Agendar Minha Primeira Sessão</span>
              </a>
              <a href="https://wa.me/5541987654321" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-primary-dark bg-white border-2 border-primary-dark hover:bg-bg-soft transition-colors rounded-xl text-center">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-text-muted">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-secondary mr-2" />
                <span>Atendimento 100% sigiloso</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-secondary mr-2" />
                <span>Horários flexíveis</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
              <img 
                src="https://lh3.googleusercontent.com/d/1CjBBxU6kR7VnLeBEMcGTM-HpRDepHlJW" 
                alt="Dra. Carolina Ribeiro em seu consultório" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">10+</span>
              </div>
              <div>
                <p className="font-bold text-text-main">Anos de Experiência</p>
                <p className="text-sm text-text-muted">Transformando vidas</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
