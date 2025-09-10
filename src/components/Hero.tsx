import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Droplets, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            <span className="text-primary-glow">HIDROS</span><span className="text-secondary">PHERA</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            Soluções inovadoras para um futuro sustentável
          </p>

          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Especialistas em suporte às diversas áreas do meio ambiente, oferecemos excelentes soluções 
            para necessidades ambientais com projetos eficientes e econômicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            <Button variant="hero" size="lg" className="group">
              Nossos Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;