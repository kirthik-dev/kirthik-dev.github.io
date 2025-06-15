
import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Courses } from "@/components/sections/Courses";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/shared/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
