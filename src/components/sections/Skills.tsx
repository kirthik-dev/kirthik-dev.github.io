
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Code, Database, BarChart, Cloud, Wind } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", icon: Code, level: 95 },
  { name: "PySpark", icon: Code, level: 90 },
  { name: "SQL", icon: Database, level: 90 },
  { name: "GCP", icon: Cloud, level: 85 },
  { name: "Power BI", icon: BarChart, level: 80 },
  { name: "Airflow", icon: Wind, level: 80 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  } as TargetAndTransition,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Skills & Tools
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 bg-background rounded-full aspect-square shadow-md animate-pulse-slow"
            >
              <skill.icon className="h-8 w-8 text-primary mb-2" />
              <p className="font-medium text-sm text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
             <motion.div 
               key={`${skill.name}-progress`}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
             >
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs font-medium text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
