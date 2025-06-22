
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-base text-foreground/80 mb-6 text-center leading-relaxed">
            I'm a Data Engineer with 1 year of experience, also contributing to AI-driven solutions. I build scalable ETL pipelines and data quality engines using Python, PySpark, and SQL. My work includes real-time data ingestion, Streamlit dashboards, and metadata chatbots. I collaborate on AI projects involving demand forecasting and multi-agent systems. Skilled in GCP, PostgreSQL, LangGraph, and ML tools like scikit-learn and TensorFlow. I bring a unique blend of data infrastructure and machine learning expertise to solve business problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a href="mailto:kirthik0071@gmail.com" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span>kirthik0071@gmail.com</span>
            </a>
            <a href="tel:+918870914014" className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 8870914014</span>
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://kirthik-dev.github.io/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full transition-transform hover:scale-110">
                <ExternalLink className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/kirthik-b-646723214" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full transition-transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://github.com/kirthik-dev" target="_blank" rel="noopener noreferrer">
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
