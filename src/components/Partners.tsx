import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Parceiros Tecnológicos',
      partners: [
        { name: 'TechCorp', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'InnovateLab', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
        { name: 'EcoTech Solutions', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'GreenInnovate', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
      ]
    },
    {
      title: 'Parceiros Institucionais',
      partners: [
        { name: 'Instituto Ambiental', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Universidade Federal', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
        { name: 'Órgão Regulador', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Fundação Verde', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
      ]
    },
    {
      title: 'Clientes Principais',
      partners: [
        { name: 'Indústria Alpha', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Empresa Beta', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
        { name: 'Corporação Gamma', logo: '/lovable-uploads/08ea1e2b-5e3b-4354-a67f-a340be11a525.png' },
        { name: 'Grupo Delta', logo: '/lovable-uploads/fcf401fe-3388-42b7-8866-12a428c4f724.png' },
      ]
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Parceiros</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos em colaboração com organizações líderes em tecnologia, instituições renomadas 
              e empresas comprometidas com a sustentabilidade para entregar soluções de excelência.
            </p>
          </div>

          {/* Partner Categories */}
          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-2xl font-bold text-center text-foreground">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.partners.map((partner, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
                    >
                      <CardContent className="flex items-center justify-center p-6 h-24">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={partner.logo}
                            alt={`Logo ${partner.name}`}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer ser nosso parceiro?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estamos sempre abertos a novas parcerias estratégicas que possam agregar valor 
                aos nossos clientes e contribuir para um futuro mais sustentável.
              </p>
              <Button variant="hero" size="lg">
                Fale Sobre Parcerias
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;