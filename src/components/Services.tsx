import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  Recycle, 
  Wind, 
  TreePine, 
  FileText, 
  Shield,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Gestão de Recursos Hídricos',
      description: 'Soluções completas para tratamento de água, sistemas de reuso e gerenciamento sustentável de recursos hídricos.',
      features: ['Tratamento de efluentes', 'Sistemas de captação', 'Monitoramento da qualidade']
    },
    {
      icon: Recycle,
      title: 'Gestão de Resíduos',
      description: 'Estratégias eficientes para coleta, tratamento e disposição adequada de resíduos sólidos e líquidos.',
      features: ['Planos de gerenciamento', 'Reciclagem', 'Compostagem']
    },
    {
      icon: Wind,
      title: 'Qualidade do Ar',
      description: 'Monitoramento e controle da poluição atmosférica com tecnologias avançadas de medição.',
      features: ['Monitoramento contínuo', 'Controle de emissões', 'Relatórios técnicos']
    },
    {
      icon: TreePine,
      title: 'Recuperação Ambiental',
      description: 'Projetos de restauração de áreas degradadas e implementação de corredores ecológicos.',
      features: ['Reflorestamento', 'Bioengenharia', 'Recuperação de APPs']
    },
    {
      icon: FileText,
      title: 'Licenciamento Ambiental',
      description: 'Consultoria completa para obtenção de licenças ambientais e adequação à legislação vigente.',
      features: ['EIA/RIMA', 'Licenças ambientais', 'Compliance ambiental']
    },
    {
      icon: Shield,
      title: 'Auditoria e Compliance',
      description: 'Auditorias ambientais e implementação de sistemas de gestão para garantir conformidade legal.',
      features: ['ISO 14001', 'Due diligence', 'Gestão de riscos']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas para todas as necessidades ambientais da sua empresa,
              garantindo eficiência, sustentabilidade e conformidade legal.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Incluem:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-4"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para desenvolver soluções ambientais 
                sob medida para o seu projeto específico.
              </p>
              <Button variant="hero" size="lg">
                Fale com Nossos Especialistas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;