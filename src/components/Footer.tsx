import { Droplets, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre Nós', href: '#about' },
      { label: 'Nossa Equipe', href: '#team' },
      { label: 'Carreiras', href: '#careers' },
      { label: 'Blog', href: '#blog' }
    ],
    services: [
      { label: 'Recursos Hídricos', href: '#services' },
      { label: 'Gestão de Resíduos', href: '#services' },
      { label: 'Qualidade do Ar', href: '#services' },
      { label: 'Licenciamento', href: '#services' }
    ],
    legal: [
      { label: 'Política de Privacidade', href: '#privacy' },
      { label: 'Termos de Uso', href: '#terms' },
      { label: 'Certificações', href: '#certifications' },
      { label: 'Compliance', href: '#compliance' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">HIDROSPHERA</span>
            </div>
            
            <p className="text-background/80 leading-relaxed">
              Especialistas em soluções ambientais sustentáveis, oferecendo projetos 
              eficientes e econômicos para um futuro melhor.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9999-8888</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@hidrosphera.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} HIDROSPHERA. Todos os direitos reservados.
            </p>
            
            <div className="flex flex-wrap items-center space-x-6 text-background/60 text-sm">
              <span>Desenvolvido com</span>
              <span className="text-primary">♥</span>
              <span>para um futuro sustentável</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;