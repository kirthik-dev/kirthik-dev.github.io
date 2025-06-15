
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="glassmorphic-card max-w-4xl mx-auto p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-foreground/80 mb-6 text-center leading-relaxed">
            A results-driven Data & AI Engineer with expertise in building
            scalable ETL pipelines and implementing robust data-quality
            frameworks. Passionate about leveraging data to drive business
            insights and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full transition-transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full transition-transform hover:scale-110">
                <Github className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
