import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Tratamento de Efluentes Industriais',
      description: 'Implementação de sistema avançado de tratamento para indústria têxtil, reduzindo 95% dos poluentes e permitindo reuso da água.',
      image: project1,
      category: 'Recursos Hídricos',
      tags: ['Tratamento de Água', 'Sustentabilidade', 'Indústria'],
      results: ['95% redução de poluentes', '60% economia de água', 'ROI em 18 meses']
    },
    {
      id: 2,
      title: 'Projeto de Energia Solar e Gestão Ambiental',
      description: 'Consultoria completa para implementação de energia renovável e gestão ambiental em complexo empresarial.',
      image: project2,
      category: 'Energia Renovável',
      tags: ['Solar', 'Gestão Ambiental', 'Consultoria'],
      results: ['40% redução na pegada de carbono', '30% economia energética', 'Certificação ISO 14001']
    },
    {
      id: 3,
      title: 'Sistema Inteligente de Conservação Hídrica',
      description: 'Desenvolvimento de tecnologia IoT para monitoramento e otimização do uso de recursos hídricos em tempo real.',
      image: project3,
      category: 'Inovação Tecnológica',
      tags: ['IoT', 'Monitoramento', 'Conservação'],
      results: ['50% redução no desperdício', 'Monitoramento 24/7', 'Alertas em tempo real']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos que transformaram o cenário ambiental de nossos clientes,
              gerando impacto positivo e resultados mensuráveis.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-background/90 text-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Resultados:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver Detalhes
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quer ver seu projeto aqui?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vamos conversar sobre como podemos desenvolver soluções ambientais 
                inovadoras e eficientes para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Iniciar Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Ver Mais Projetos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;