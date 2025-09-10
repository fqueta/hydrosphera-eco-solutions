import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Droplets, Recycle, TreePine } from 'lucide-react';

const Portfolio = () => {
  const portfolioCategories = [
    {
      id: 1,
      icon: Droplets,
      title: 'Tratamento de Efluentes e Águas',
      description: 'Soluções completas para tratamento de águas e efluentes industriais com tecnologia avançada.',
      services: [
        'Realização de estudos de tratabilidade e viabilidade técnica e econômica',
        'Elaboração de projetos básicos e executivos de ETE',
        'Elaboração de projetos de ampliação e adequação de ETE',
        'Realização de estudos para adequação operacional de ETE e partidas de ETE',
        'Realização do acompanhamento de operação de ETE',
        'Realização de amostragens de efluentes',
        'Acompanhamento de operação de ETA'
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 2,
      icon: Recycle,
      title: 'Resíduos Sólidos',
      description: 'Gestão sustentável e eficiente de resíduos sólidos com foco na economia circular.',
      services: [
        'Elaboração de plano de gerenciamento de resíduos sólidos - PGRS',
        'Elaboração de projetos de depósitos temporários de resíduos - DTR',
        'Elaboração de projetos de implantação da coleta seletiva',
        'Assessoria e treinamento de operação do Sistema MTR - MG para emissão de MTR',
        'Assessoria e treinamento de operação do Sistema MTR - MG para preenchimento e envio da DMR'
      ],
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 3,
      icon: TreePine,
      title: 'Gestão Ambiental',
      description: 'Consultoria especializada em licenciamento ambiental e conformidade regulatória.',
      services: [
        'Elaboração de estudos ambientais (LAS, RAS, RCA, PCA e RADA) para fins de obtenção, ampliação e renovação de Licença Ambiental',
        'Acompanhamento do cumprimento das condicionantes de licença ambiental, TAC e outorga',
        'Emissão de Certificado de Uso Insignificante da Água',
        'Elaboração e envio da Declaração de Carga Poluidora (DCP)',
        'Elaboração e envio do RAPP junto ao IBAMA',
        'Elaboração e envio do INRS junto ao SINIR'
      ],
      gradient: 'from-emerald-500/20 to-green-600/20'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nosso <span className="text-primary">Portfólio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções ambientais completas e especializadas para atender 
              às necessidades específicas de cada cliente e setor.
            </p>
          </div>

          {/* Portfolio Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {portfolioCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
                >
                  <CardContent className="p-6 space-y-6">
                    {/* Icon and Title */}
                    <div className="text-center space-y-4">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Services List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground text-sm border-b border-border/50 pb-2">
                        Nossos Serviços:
                      </h4>
                      <ul className="space-y-2 max-h-48 overflow-y-auto">
                        {category.services.map((service, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start leading-relaxed">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisa de uma solução ambiental personalizada?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para desenvolver a solução 
                ideal para os desafios ambientais do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;