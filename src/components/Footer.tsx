import { MapPin, Globe, Phone, Mail, Instagram, Facebook, Youtube, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-main text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6">Dra. Carolina Ribeiro</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Psicóloga Clínica especialista em Terapia Cognitivo-Comportamental. Ajudando pessoas a construírem uma vida mais leve e autêntica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Atendimento Presencial */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-200">Atendimento Presencial</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Rua Marechal Deodoro, 630 - Sala 405<br />
                  Centro, Curitiba - PR<br />
                  CEP: 80010-010
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Segunda a Sexta: 9h às 21h<br />
                  Sábados: 9h às 13h
                </span>
              </li>
            </ul>
          </div>

          {/* Atendimento Online & Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-200">Atendimento Online</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Globe className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">Para todo o Brasil via videochamada</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">(41) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 shrink-0" />
                <span className="text-gray-400 text-sm">contato@dracarolinaribeiro.com.br</span>
              </li>
            </ul>
          </div>

          {/* Credenciais & Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-200">Credenciais</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-400 text-sm">CRP 08/12345</li>
              <li className="text-gray-400 text-sm">CNPJ: 98.765.432/0001-10</li>
            </ul>
            <h4 className="font-bold text-lg mb-4 text-gray-200">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Código de Ética</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dra. Carolina Ribeiro. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido com cuidado e empatia.
          </p>
        </div>
      </div>
    </footer>
  );
}
