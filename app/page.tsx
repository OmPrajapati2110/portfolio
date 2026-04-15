import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import VisitorTracker from '@/components/ui/VisitorTracker';
import ChatbotLoader from '@/components/ui/ChatbotLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <VisitorTracker />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
      <ChatbotLoader />
    </main>
  );
}
