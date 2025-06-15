
import { motion } from "framer-motion";
import { educationItems } from "@/data/education";
import { EducationCard } from "./education/EducationCard";
import { Link } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Education() {
  const certifications = educationItems.filter(
    (item) => item.tag === "Certification"
  );
  const trainingAndCourses = educationItems.filter(
    (item) => item.tag !== "Certification"
  );

  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
          Certifications
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <EducationCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <h2 className="text-xl md:text-2xl font-bold mt-24 mb-12 text-center">
          Training & Courses
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <ul className="space-y-4">
            {trainingAndCourses.map((item) => (
              <motion.li key={item.title} variants={itemVariants}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-primary/10 transition-colors"
                  >
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Link className="h-5 w-5 text-muted-foreground ml-4 shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-4 rounded-lg bg-card/80 backdrop-blur-sm">
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
