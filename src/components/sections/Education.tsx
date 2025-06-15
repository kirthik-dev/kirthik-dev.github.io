
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    name: "Fractal Data Science",
    issuer: "Coursera",
    id: "FDS-Coursera-9VRLU3VD5YWG",
    link: "https://coursera.org/verify/professional-cert/9VRLU3VD5YWG",
    logo: "https://img.icons8.com/color/144/coursera.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const CertificationCard = ({ cert }: { cert: (typeof certifications)[0] }) => (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group transition-all duration-300 ease-in-out hover:scale-105"
  >
    <Card className="h-full group-hover:border-primary transition-colors">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <img src={cert.logo} alt={`${cert.name} logo`} className="h-10 w-10 object-contain" />
        <div className="flex-1">
          <CardTitle className="text-base font-bold leading-tight">{cert.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
      </CardHeader>
    </Card>
  </a>
);

type Course = {
  title: string;
  provider: string;
  date: string;
};

type Training = Course & {
  link?: string;
};

type CourseCategory = {
  category: string;
  courses: Course[];
};

type TrainingCategory = {
  category: string;
  trainings: Training[];
};

const courseCategories: CourseCategory[] = [
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
];

const trainingCategories: TrainingCategory[] = [
    {
        category: "Workshops",
        trainings: [
            { title: "Advanced Python for Data Science", provider: "Online", date: "2024" },
            { title: "Cloud Architecture on GCP", provider: "Online", date: "2023" },
        ]
    },
    {
        category: "Bootcamps",
        trainings: [
            { title: "Data Engineering Bootcamp", provider: "DataTalks.Club", date: "2023" },
        ]
    },
    {
        category: "Internships",
        trainings: [
            { title: "Data Science Internship", provider: "SmartKnower", date: "2023", link: "/lovable-uploads/e27d5d26-54ee-4188-a894-b5ab7530f32d.png" },
        ]
    }
];

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
          Certifications, Training & Courses
        </h2>
        <Tabs defaultValue="certifications" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="certifications">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {certifications.map((cert) => (
                <motion.div key={cert.name} variants={itemVariants}>
                  <CertificationCard cert={cert} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="training">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <Accordion type="single" collapsible className="w-full">
                    {trainingCategories.map(category => (
                        <AccordionItem key={category.category} value={category.category} className="border-b-primary/20">
                            <AccordionTrigger className="text-lg font-bold hover:no-underline">{category.category}</AccordionTrigger>
                            <AccordionContent>
                               <ul className="space-y-2 pl-4">
                                {category.trainings.map(training => (
                                    <li key={training.title} className="flex justify-between items-center text-sm">
                                        <span>
                                            <span className="font-semibold">{training.title}</span> - <span className="text-muted-foreground">{training.provider}</span>
                                        </span>
                                        <div className="flex items-center gap-4">
                                            {training.link && (
                                                <a href={training.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs font-medium">
                                                    View Certificate
                                                </a>
                                            )}
                                            <span className="font-mono text-xs">{training.date}</span>
                                        </div>
                                    </li>
                                ))}
                               </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
          </TabsContent>
          <TabsContent value="courses">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
