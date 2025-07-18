
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface Project {
  title: string;
  image: string;
  details: string[];
  tags: string[];
  repoUrl: string;
}

const basePath = import.meta.env.BASE_URL;

const projects: Project[] = [
  {
    title: "AI-Powered Blog Generation & Translation Pipeline",
    image: `${basePath}lovable-uploads/6bfabb44-4b36-491b-b200-d91c5f0a15d3.png`,
    details: [
      "Structured a modular FastAPI project using uv for clean graph-based workflow management.",
      "Built and connected LangGraph nodes to generate, structure, and translate blogs dynamically.",
      "Integrated LangGraph Studio for visual debugging and state tracking of blog generation flow.",
      "Exposed APIs and tested end-to-end functionality using Postman for multilingual blog output.",
    ],
    tags: ["FastAPI", "LangGraph", "Docker", "Python"],
    repoUrl: "https://github.com/kirthik-dev/AI-Powered-Blog-Generation-Translation-Pipeline",
  },
  {
    title: "Scalable Uber Data Analytics Pipeline on GCP",
    image: `${basePath}lovable-uploads/a8221c16-892d-4dad-8cfa-6805ff242dda.png`,
    details: [
      "Engineered a daily ETL pipeline to process 5M+ Uber trip records using Python and Mage on Google Cloud.",
      "Designed a star-schema with fact and dimension tables, reducing BigQuery query latency by 40%.",
      "Created an interactive Google Data Studio dashboard showing trip frequency, peak hours, and heatmaps.",
      "Enabled data-driven operational decisions for 10+ stakeholders through real-time reporting.",
    ],
    tags: ["GCP", "BigQuery", "Mage", "Looker Studio"],
    repoUrl: "https://github.com/kirthik-dev/Scalable-Uber-Data-Analytics-Pipeline-on-GCP",
  },
  {
    title: "Spotify User Behavior Analytics Pipeline",
    image: `${basePath}lovable-uploads/68526ab1-ef69-40fe-b840-8c7f62fdc405.png`,
    details: [
      "Extracted and processed 200K+ tracks and session records using the Spotipy API.",
      "Cleaned and structured data using Pandas, boosting ETL throughput by 25%.",
      "Built Matplotlib visualizations to track trending songs and user engagement patterns.",
      "Provided actionable insights that informed the creation of 3 new playlist features.",
    ],
    tags: ["Python", "Pandas", "Spotipy", "Matplotlib"],
    repoUrl: "https://github.com/kirthik-dev/Spotify-User-Behavior-Analytics-Pipeline",
  },
  {
    title: "Retail Price Optimization using Machine Learning",
    image: `${basePath}lovable-uploads/b26d45db-dc4f-4191-91c4-a20e6405f576.png`,
    details: [
      "Built a regression-based price optimization engine to identify ideal pricing for café items using historical sales data.",
      "Modeled price elasticity of demand (EPD) with regression trees to estimate item-level sensitivity to price fluctuations.",
      "Performed data cleaning, merging, and feature engineering across multi-source transactional and metadata inputs.",
      "Leveraged exploratory data analysis (EDA) to visualize price-demand relationships and support business insight discovery.",
    ],
    tags: ["Python", "Machine Learning", "Regression Trees", "EDA"],
    repoUrl: "https://github.com/kirthik-dev/Price-Optimization-project",
  },
  {
    title: "Marketing Budget Optimization using Machine Learning",
    image: `${basePath}lovable-uploads/2edd09ca-b56c-4fb3-ad9d-2b3ba7a16fe3.png`,
    details: [
      "Developed a supervised ML pipeline to optimize B2C marketing spend using XGBoost and LightGBM.",
      "Predicted customer engagement using historical campaign performance to assess channel-level effectiveness.",
      "Engineered features and visualized marketing impact patterns to support resource reallocation decisions.",
      "Applied statistical modeling to support cost-effective strategy design without manual experimentation.",
    ],
    tags: ["XGBoost", "LightGBM", "Machine Learning", "Marketing Analytics"],
    repoUrl: "https://github.com/kirthik-dev/budget-optimization",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <Card className="flex flex-col h-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg pr-4">{project.title}</CardTitle>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
