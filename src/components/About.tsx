import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Award,
    title: 'Excelência',
    description: 'Mais de 15 anos de experiência em soluções ambientais sustentáveis'
  }, {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais qualificados em diversas áreas ambientais'
  }, {
    icon: Target,
    title: 'Resultados Eficientes',
    description: 'Projetos econômicos e de alta performance para nossos clientes'
  }, {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Soluções tecnológicas avançadas para desafios ambientais'
  }];
  return <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">HIDROSPHERA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Somos uma empresa no mercado deste 2001, especializada em oferecer suporte completo às diversas áreas do meio ambiente, desenvolvendo soluções inovadoras e sustentáveis para um futuro melhor.</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções ambientais eficientes e econômicas que contribuam para a preservação 
                  do meio ambiente e o desenvolvimento sustentável. Trabalhamos com tecnologias avançadas 
                  e metodologias comprovadas para garantir resultados excepcionais.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como referência  em soluções ambientais inovadoras, contribuindo ativamente para um planeta mais sustentável e equilibrado para as futuras gerações. 
                </p>
              </div>
              <div  className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Valores
                </h3>
                <ul>
                    <li><small>Determinação;</small></li>
                    <li><small>Companheirismo;</small></li>
                    <li><small>Organização;</small></li>
                    <li><small>Profissionalismo;</small></li>
                    <li><small>Dinamismo;</small></li>
                    <li><small>Respeito;</small></li>
                    <li><small>Comunicação;</small></li>
                    <li><small>Humildade.</small></li>
                </ul>
            </div>
              

              <Button variant="default" size="lg" className="mt-6">
                Conheça Nossa História
              </Button>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Especialistas</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;