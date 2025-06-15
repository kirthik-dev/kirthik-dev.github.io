import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Blog Generation & Translation Pipeline",
    description: [
      "Structured a modular FastAPI project and built a LangGraph pipeline to generate, structure, and translate blogs.",
      "Integrated LangGraph Studio for visual debugging and state tracking of the generation flow.",
      "Exposed and tested APIs using Postman for end-to-end multilingual blog output."
    ],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    tags: ["FastAPI", "LangGraph", "Python", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Scalable Uber Data Analytics Pipeline on GCP",
    description: [
        "Engineered a daily ETL pipeline on GCP for 5M+ Uber records, designing a star-schema that cut BigQuery latency by 40%.",
        "Created an interactive Google Data Studio dashboard visualizing trip frequency, peak hours, and heatmaps.",
        "Enabled data-driven decisions for 10+ stakeholders through real-time reporting."
    ],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "SQL", "Mage", "GCP", "BigQuery"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Spotify User Behavior Analytics Pipeline",
    description: [
        "Extracted and processed 200K+ Spotify records with Spotipy and Pandas, boosting ETL throughput by 25%.",
        "Built Matplotlib visualizations to track trending songs and user engagement patterns.",
        "Provided actionable insights that informed the creation of 3 new playlist features."
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "Spotipy", "Pandas", "Matplotlib"],
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
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
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
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                </ul>
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
