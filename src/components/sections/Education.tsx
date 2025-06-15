
import { motion } from "framer-motion";
import { educationItems } from "@/data/education";
import { EducationCard } from "./education/EducationCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
          Certifications, Training & Courses
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <EducationCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
