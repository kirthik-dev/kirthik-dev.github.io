
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Data Engineer",
    company: "YLogx Pvt Ltd",
    period: "Feb 2025 - Present",
    description: "Designed two data quality engines in PySpark & Python with 12+ validations and built a Streamlit-based chatbot for metadata management.",
  },
  {
    role: "AI Engineer Intern",
    company: "YLogx Pvt Ltd",
    period: "Aug 2024 - Feb 2025",
    description: "Prototyped real-time workflows, developed a multi-agentic chatbot using LangGraph, and conducted stakeholder requirement gathering.",
  },
  {
    role: "Research Intern",
    company: "NIT Trichy",
    period: "Jun 2023 - Jul 2023",
    description: "Forecasted population growth near nuclear plants using regression models, reducing RMSE by 10% with GridSearchCV.",
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
