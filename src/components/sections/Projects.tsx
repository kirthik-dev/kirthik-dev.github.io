
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "Uber Data Analytics Pipeline",
    description: "Engineered a daily ETL pipeline processing 5M+ Uber trip records, using Python and Mage, with a star-schema in BigQuery reducing query latency by 40%.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "SQL", "Mage", "GCP", "BigQuery"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Spotify ETL Dashboard",
    description: "Extracted 200K+ records via Spotipy API, visualized top trends with Matplotlib, and identified playlist insights.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "Spotipy", "Pandas", "Matplotlib"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Population Forecast Model",
    description: "Modeled NASA SEDAC data to forecast population growth near nuclear plants. A GridSearchCV-tuned regression model reduced RMSE by 10%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Python", "Scikit-learn", "Pandas", "EDA"],
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
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
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
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
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
