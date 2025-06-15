
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "Real-time Fraud Detection",
    description: "A machine learning system to detect fraudulent transactions in real-time using GCP and Kafka.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["PySpark", "GCP", "ML", "Kafka"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a model to predict customer churn, enabling proactive retention strategies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "Scikit-learn", "Power BI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ETL Pipeline Orchestrator",
    description: "A dynamic ETL orchestration tool built with Airflow for managing complex data workflows.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Airflow", "Docker", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardVariants}
              className="break-inside-avoid bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a href={project.liveUrl}><Button variant="outline" size="sm"><Eye className="mr-2 h-4 w-4" />Demo</Button></a>
                  <a href={project.githubUrl}><Button variant="outline" size="sm"><Github className="mr-2 h-4 w-4" />Code</Button></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
