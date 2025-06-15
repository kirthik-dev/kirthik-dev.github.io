
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-base text-foreground/80 mb-6 text-center leading-relaxed">
            Data Engineer skilled in building scalable ETL pipelines and data quality frameworks with Python, PySpark, SQL, and GCP. Led the creation of two data quality engines and real-time ingestion workflows processing millions of records daily. Developed Streamlit-based UIs and chatbots for metadata management. Proficient in collaborative stakeholder engagement and cross-functional solution design.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/kirthik-b-646723214" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full transition-transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://github.com/kirthiksanjai" target="_blank" rel="noopener noreferrer">
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
