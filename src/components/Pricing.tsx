import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">VALORES</span>
          <h2 className="text-3xl md:text-4xl font-bold">Investimento na Sua Saúde Mental</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Sessão Avulsa */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-soft p-8 rounded-3xl border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2">Sessão Avulsa</h3>
            <p className="text-text-muted text-sm mb-6">Pagamento por sessão, sem compromisso mensal</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">R$ 180</span>
              <span className="text-text-muted">/sessão</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Sessão de 50 minutos</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Materiais terapêuticos</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Recibo para reembolso</span>
              </li>
            </ul>
            <a href="#agendar" className="w-full py-4 text-center font-bold text-primary-dark bg-white border-2 border-primary-dark hover:bg-bg-soft transition-colors rounded-xl">
              Agendar Sessão
            </a>
          </motion.div>

          {/* Pacote Mensal (Destaque) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-dark text-white p-8 rounded-3xl shadow-xl relative flex flex-col transform lg:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              Mais Escolhido
            </div>
            <h3 className="text-xl font-bold mb-2">Pacote Mensal</h3>
            <p className="text-primary-100 text-sm mb-6 opacity-90">4 sessões (1 por semana)</p>
            <div className="mb-2">
              <span className="text-4xl font-bold">R$ 640</span>
              <span className="opacity-90">/mês</span>
            </div>
            <p className="text-sm font-medium text-accent-soft mb-8">Economia de R$ 80,00</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-soft shrink-0 mr-3 mt-0.5" />
                <span className="text-sm">Agendamento prioritário</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-soft shrink-0 mr-3 mt-0.5" />
                <span className="text-sm">Suporte via WhatsApp (emergências)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-soft shrink-0 mr-3 mt-0.5" />
                <span className="text-sm">Remarcação sem custo (24h)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent-soft shrink-0 mr-3 mt-0.5" />
                <span className="text-sm">Recibo para reembolso</span>
              </li>
            </ul>
            <a href="#agendar" className="w-full py-4 text-center font-bold text-primary-dark bg-white hover:bg-bg-soft transition-colors rounded-xl shadow-md">
              Garantir Pacote
            </a>
          </motion.div>

          {/* Pacote Trimestral */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-soft p-8 rounded-3xl border border-gray-100 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2">Pacote Trimestral</h3>
            <p className="text-text-muted text-sm mb-6">12 sessões para acompanhamento contínuo</p>
            <div className="mb-2">
              <span className="text-4xl font-bold">R$ 1.800</span>
              <span className="text-text-muted">/trimestre</span>
            </div>
            <p className="text-sm font-medium text-primary-dark mb-8">Economia de R$ 360,00</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Todos os benefícios do mensal</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Acompanhamento de longo prazo</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">Garantia de horário fixo</span>
              </li>
            </ul>
            <a href="#agendar" className="w-full py-4 text-center font-bold text-primary-dark bg-white border-2 border-primary-dark hover:bg-bg-soft transition-colors rounded-xl">
              Garantir Pacote
            </a>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted font-medium">
            Formas de Pagamento: PIX • Cartão de Crédito • Transferência Bancária
          </p>
        </div>
      </div>
    </section>
  );
}
