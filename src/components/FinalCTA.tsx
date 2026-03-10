import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="agendar" className="py-20 bg-bg-soft relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dê o Primeiro Passo Para Cuidar de Você</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Buscar ajuda não é sinal de fraqueza, é um ato de coragem e autocuidado. Você merece viver de forma mais leve, com mais clareza e paz interior.
            <br /><br />
            <strong className="text-text-main">Estou aqui para caminhar com você nessa jornada. Vamos começar?</strong>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-text-main mb-2">Nome completo</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Seu nome" />
            </div>
            
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-bold text-text-main mb-2">WhatsApp</label>
              <input type="tel" id="whatsapp" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="(00) 00000-0000" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-text-main mb-2">Preferência de atendimento:</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="type" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                    <span className="ml-2 text-text-muted">Online</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="type" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="ml-2 text-text-muted">Presencial</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-text-main mb-2">Melhor horário:</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="time" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="ml-2 text-text-muted">Manhã</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="time" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                    <span className="ml-2 text-text-muted">Tarde</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="time" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="ml-2 text-text-muted">Noite</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-text-main mb-2">Mensagem (opcional)</label>
              <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Conte brevemente o que te traz aqui..."></textarea>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="privacy" type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-text-muted">
                  Li e aceito a <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                </label>
              </div>
            </div>
            
            <button type="button" className="w-full py-4 text-center text-lg font-bold text-white bg-primary-dark hover:bg-primary transition-colors rounded-xl shadow-md">
              Agendar Minha Primeira Sessão
            </button>
          </form>
          
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-text-muted">OU</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="https://wa.me/5541987654321" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-dark bg-white border-2 border-primary-dark hover:bg-bg-soft transition-colors rounded-xl w-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              Prefiro Conversar Pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
