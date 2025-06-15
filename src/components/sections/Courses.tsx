
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
            { title: "Big Data Analytics", provider: "NIT Trichy", date: "2023" },
            { title: "Quality Control", provider: "NIT Trichy", date: "2023" },
        ]
    },
    {
        category: "AI/ML",
        courses: [
            { title: "Introduction to Machine Learning", provider: "NIT Trichy", date: "Coursework" },
            { title: "Natural Language Processing", provider: "NIT Trichy", date: "Projects" },
        ]
    },
     {
        category: "Minor in Computer Applications",
        courses: [
            { title: "Data Structures and Applications", provider: "NIT Trichy", date: "Coursework" },
            { title: "Mathematical Foundations of CS", provider: "NIT Trichy", date: "Coursework" },
            { title: "Operating Systems", provider: "NIT Trichy", date: "Coursework" },
        ]
    }
]

export function Courses() {
  return (
    <section id="courses" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
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
                        <AccordionTrigger className="text-lg font-bold hover:no-underline">{category.category}</AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-2 pl-4">
                            {category.courses.map(course => (
                                <li key={course.title} className="flex justify-between text-sm">
                                    <span>
                                        <span className="font-semibold">{course.title}</span> - <span className="text-muted-foreground">{course.provider}</span>
                                    </span>
                                    <span className="font-mono text-xs">{course.date}</span>
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
