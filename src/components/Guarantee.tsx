import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/10 border border-secondary/20 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          
          <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-md">
            <Handshake className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-main relative z-10">
            Compromisso de Transparência
          </h2>
          
          <p className="text-lg text-text-muted mb-6 relative z-10 leading-relaxed max-w-2xl mx-auto">
            "Se após a primeira sessão você sentir que não houve identificação ou que a abordagem não é para você, devolvemos 100% do valor pago. Sem burocracia, sem perguntas."
          </p>
          
          <p className="font-bold text-secondary text-lg relative z-10">
            Você não tem nada a perder, apenas a ganhar autoconhecimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
