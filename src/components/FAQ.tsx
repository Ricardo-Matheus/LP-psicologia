import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Como sei se preciso de terapia?",
    answer: "Se você sente que suas emoções estão atrapalhando sua vida, relacionamentos ou trabalho, a terapia pode ajudar. Não precisa estar em crise para buscar apoio psicológico."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "Não existe um tempo fixo. Algumas pessoas sentem melhora em poucas sessões, outras precisam de um acompanhamento mais longo. Respeitamos seu ritmo e necessidades."
  },
  {
    question: "Qual a diferença entre psicólogo e psiquiatra?",
    answer: "Psicólogos trabalham com psicoterapia (conversas terapêuticas). Psiquiatras são médicos que podem prescrever medicamentos. Muitas vezes, os tratamentos se complementam."
  },
  {
    question: "As sessões são realmente sigilosas?",
    answer: "Sim! O sigilo é garantido pelo Código de Ética Profissional. Nada do que você compartilha sai do consultório, exceto em situações de risco iminente (previstas em lei)."
  },
  {
    question: "Aceita convênio?",
    answer: "Não trabalho diretamente com convênios, mas forneço recibo para você solicitar reembolso junto ao seu plano de saúde."
  },
  {
    question: "Qual a duração de cada sessão?",
    answer: "Cada sessão tem 50 minutos de duração, com foco total em você."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos PIX, cartão de crédito e transferência bancária. Pagamento realizado após cada sessão."
  },
  {
    question: "Preciso fazer terapia toda semana?",
    answer: "No início, sessões semanais são recomendadas. Com o tempo, podemos espaçar conforme sua evolução."
  },
  {
    question: "E se eu não me identificar com a abordagem?",
    answer: "A primeira sessão serve justamente para isso: conhecer o trabalho e ver se há identificação. Sem compromisso."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-bg-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">DÚVIDAS</span>
          <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-text-main pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
