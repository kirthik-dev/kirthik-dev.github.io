
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming & Development 💻",
    descriptor: "Crafting elegant solutions and bringing ideas to life with code.",
    skills: ["Python", "SQL", "DAX", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow", "Keras", "Flask", "Requests", "psycopg2", "Spotipy", "VS Code", "PyCharm", "GitHub", "Jupyter Notebook", "Anaconda", "Git"],
  },
  {
    title: "Data Science & Analytics 🔬",
    descriptor: "Uncovering hidden stories and insights from complex datasets.",
    skills: ["Data Pre-Processing", "Machine Learning", "NLP", "Deep Learning", "EDA", "Feature Engineering", "Hyper-Parameter Tuning", "Data Visualization", "PySpark", "Apache Spark", "Hadoop"],
  },
  {
    title: "Data Infrastructure & The Cloud ☁️",
    descriptor: "Building robust, scalable pipelines to keep data flowing.",
    skills: ["PostgreSQL", "BigQuery", "Fact & Dimension Tables", "LangGraph", "Apache Airflow", "GCP", "FastAPI"],
  },
  {
    title: "Business Intelligence & Storytelling 📊",
    descriptor: "Transforming raw data into compelling visual narratives.",
    skills: ["Power BI", "Tableau", "Power Query Editor", "Google Data Studio"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          My Tech Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription className="pt-2">{category.descriptor}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
