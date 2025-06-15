
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const courseCategories = [
    {
        category: "Data Engineering",
        courses: [
            { title: "Advanced SQL for Data Scientists", provider: "Coursera", date: "2023" },
            { title: "Building Data Pipelines with Apache Airflow", provider: "Udemy", date: "2023" },
        ]
    },
    {
        category: "AI/ML",
        courses: [
            { title: "Deep Learning Specialization", provider: "deeplearning.ai", date: "2022" },
            { title: "Natural Language Processing with Transformers", provider: "Hugging Face", date: "2022" },
        ]
    },
     {
        category: "Web Development",
        courses: [
            { title: "The Complete Web Developer in 2023", provider: "Udemy", date: "2023" },
            { title: "React - The Complete Guide", provider: "Academind", date: "2022" },
        ]
    }
]

export function Courses() {
  return (
    <section id="courses" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Courses & Training
        </h2>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
        >
            <Accordion type="single" collapsible className="w-full">
                {courseCategories.map(category => (
                    <AccordionItem key={category.category} value={category.category} className="border-b-primary/20">
                        <AccordionTrigger className="text-xl font-bold hover:no-underline">{category.category}</AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-2 pl-4">
                            {category.courses.map(course => (
                                <li key={course.title} className="flex justify-between">
                                    <span>
                                        <span className="font-semibold">{course.title}</span> - <span className="text-muted-foreground">{course.provider}</span>
                                    </span>
                                    <span className="font-mono text-sm">{course.date}</span>
                                </li>
                            ))}
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
