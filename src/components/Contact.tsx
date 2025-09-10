import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua Manoel vilar, 13 Loja 4', 'Democrata - Juiz de Fora/MG', 'CEP: 36035-240']
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(32) 98411-1197', '(11) 3333-4444', 'WhatsApp: (11) 9999-8888']
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['hidrosphera@gmail.com.br']
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda à Quinta: 8h às 18h', 'Sexta: 8h às 17h', 'Plantão 24h para emergências']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para transformar seus desafios ambientais em soluções sustentáveis? 
              Nossa equipe está aqui para ajudar você a alcançar seus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="border-border/50 hover:shadow-card transition-shadow duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-lg text-foreground">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <Card className="bg-gradient-subtle border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          Consulta Gratuita
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Agende uma avaliação inicial sem compromisso
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Agendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-subtle border-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          Atendimento Urgente
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Suporte 24h para emergências ambientais
                        </p>
                      </div>
                      <Button variant="secondary" size="sm">
                        Ligar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Envie sua Mensagem
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva seu projeto ou necessidade..." 
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;