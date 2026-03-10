import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const credentials = [
  "CRP 08/12345 (Conselho Regional de Psicologia)",
  "Graduação em Psicologia - UFPR",
  "Especialização em Terapia Cognitivo-Comportamental - USP",
  "Formação em Terapia de Casal e Família",
  "Certificação Internacional em TCC - Beck Institute",
  "Membro da Associação Brasileira de TCC"
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <img 
                src="https://lh3.googleusercontent.com/d/1FtLBa1mFer6v7D3YmHtHM5tzqbuLN7XZ" 
                alt="Dra. Carolina Ribeiro" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-soft rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2 block">SOBRE MIM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem é a Dra. Carolina Ribeiro</h2>
            
            <div className="space-y-4 text-text-muted text-lg mb-8">
              <p>
                Sou psicóloga há 10 anos e minha missão é criar um espaço onde você se sinta verdadeiramente acolhido(a). Acredito que cada pessoa tem seu próprio tempo e ritmo, e meu papel é caminhar ao seu lado nessa jornada de autoconhecimento.
              </p>
              <p>
                Trabalho com a abordagem da Terapia Cognitivo-Comportamental (TCC), baseada em evidências científicas, mas sempre com um olhar humano e empático. Atendi mais de 800 pacientes ao longo da minha carreira, cada um com suas particularidades e histórias únicas.
              </p>
              <p>
                Meu consultório (presencial e online) é um espaço sem julgamentos, onde você pode ser quem realmente é.
              </p>
            </div>

            <div className="bg-bg-soft p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Formação e Credenciais</h3>
              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary-dark mr-3 shrink-0 mt-0.5" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
