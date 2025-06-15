
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Data Engineer",
    company: "Innovatech Solutions",
    period: "2021 - Present",
    description: "Led development of a real-time data processing pipeline using PySpark and GCP, improving data availability by 40%.",
  },
  {
    role: "Data Engineer",
    company: "DataDriven Inc.",
    period: "2019 - 2021",
    description: "Designed and maintained ETL workflows with Airflow, processing terabytes of data daily for business intelligence.",
  },
  {
    role: "Junior Data Analyst",
    company: "Analytics Co.",
    period: "2018 - 2019",
    description: "Created interactive dashboards in Power BI and performed ad-hoc analysis to support marketing campaigns.",
  },
];

const cardVariants = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -100 : 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
});

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
       <div className="absolute inset-x-0 top-0 h-full bg-background -skew-y-3 -z-10 origin-top-left" />
       <div className="absolute inset-x-0 bottom-0 h-full bg-background skew-y-3 -z-10 origin-bottom-left" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-primary/20 -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants(index % 2 === 0)}
              className="mb-8 flex justify-between items-center w-full"
            >
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="glassmorphic-card p-6">
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </div>
              <div className="hidden md:flex z-10 bg-primary h-4 w-4 rounded-full order-1 md:order-1.5" />
              <div className={`w-full md:w-[calc(50%-2rem)] hidden md:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
