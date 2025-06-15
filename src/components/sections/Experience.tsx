
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Data Engineer",
    company: "YLogx Pvt Ltd",
    period: "Feb 2025 - Present",
    description: [
      "Tech Used: PySpark, Streamlit, Snowflake, FastAPI, LangGraph",
      "Analyzed 4.6GB Favorita sales data using PySpark for assortment planning and ABC analysis.",
      "Performed demand volatility assessment to support forecast model selection.",
      "Designed a Streamlit dashboard for comparing statistical and ML-based forecasting outputs.",
      "Built a multi-agent chatbot using LangGraph for coordinating DE, DA, and ML workflows.",
      "Architected modular agents with FastAPI backend and Snowflake for storage/query ops.",
      "Automated data validation, reporting, and pipeline orchestration through agent collaboration.",
      "Worked with external clients to align chatbot features with real-world data use cases.",
      "Authored design documentation, API workflows, and architecture diagrams for deployment.",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "YLogx Pvt Ltd",
    period: "Aug 2024 - Feb 2025",
    description: [
      "Built two data quality engines with 12+ checks (nulls, schema, types, duplicates).",
      "Migrated logic to PySpark for large-scale validation and improved performance.",
      "Created a Streamlit chatbot for schema and metadata management.",
      "Automated rule-based validations with PostgreSQL integration.",
      "Worked with stakeholders to document, test, and deploy the solution.",
    ],
  },
  {
    role: "Research Intern",
    company: "NIT Trichy",
    period: "Jun 2023 - Jul 2023",
    description: [
      "Forecasted population growth near nuclear plants using NASA SEDAC data.",
      "Analyzed multi-radius trends (10km–1200km) and urban impact.",
      "Applied regression with GridSearchCV and K-Fold, improving accuracy.",
      "Estimated infrastructure needs for 150K+ people by 2030.",
    ],
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
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
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
                  <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 mt-2">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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
