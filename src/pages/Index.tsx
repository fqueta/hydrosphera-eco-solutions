import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Partners />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
