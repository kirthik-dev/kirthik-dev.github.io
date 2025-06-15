
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Blog Generation & Translation Pipeline",
    details: [
      "Structured a modular FastAPI project using uv for clean graph-based workflow management.",
      "Built and connected LangGraph nodes to generate, structure, and translate blogs dynamically.",
      "Integrated LangGraph Studio for visual debugging and state tracking of blog generation flow.",
      "Exposed APIs and tested end-to-end functionality using Postman for multilingual blog output.",
    ],
    tags: ["FastAPI", "LangGraph", "Docker", "Python"],
  },
  {
    title: "Scalable Uber Data Analytics Pipeline on GCP",
    details: [
      "Engineered a daily ETL pipeline to process 5M+ Uber trip records using Python and Mage on Google Cloud.",
      "Designed a star-schema with fact and dimension tables, reducing BigQuery query latency by 40%.",
      "Created an interactive Google Data Studio dashboard showing trip frequency, peak hours, and heatmaps.",
      "Enabled data-driven operational decisions for 10+ stakeholders through real-time reporting.",
    ],
    tags: ["GCP", "BigQuery", "Mage", "Looker Studio"],
  },
  {
    title: "Spotify User Behavior Analytics Pipeline",
    details: [
      "Extracted and processed 200K+ tracks and session records using the Spotipy API.",
      "Cleaned and structured data using Pandas, boosting ETL throughput by 25%.",
      "Built Matplotlib visualizations to track trending songs and user engagement patterns.",
      "Provided actionable insights that informed the creation of 3 new playlist features.",
    ],
    tags: ["Python", "Pandas", "Spotipy", "Matplotlib"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">Projects</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-4">
                          {project.details.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
