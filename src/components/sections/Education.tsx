
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const certifications = [
  {
    name: "Google Cloud Certified",
    issuer: "Professional Data Engineer",
    id: "GCP-PDE-123456",
    link: "#",
    logo: "https://www.gstatic.com/devrel-devsite/prod/v1ce962f9283f5d817d12a2c1f937d00f73549efdfde0d5bed79393a5ebc34f8a/cloud/images/cloud-logo.svg",
  },
  {
    name: "Databricks Certified",
    issuer: "Associate Developer for Apache Spark",
    id: "DBC-ADS-789012",
    link: "#",
    logo: "https://img.icons8.com/color/144/databricks.png",
  },
];

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
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const FlipCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <div className="group w-full h-48 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 bg-background rounded-xl flex flex-col items-center justify-center p-4 text-center">
        <img src={cert.logo} alt={cert.name} className="h-12 mb-2" />
        <h3 className="font-bold text-sm">{cert.name}</h3>
        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4 text-center">
        <h4 className="text-base font-bold">Credential ID</h4>
        <p className="text-sm mb-2">{cert.id}</p>
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary font-bold py-1 px-3 rounded text-sm hover:bg-primary-foreground/90">Verify</a>
      </div>
    </div>
  </div>
);


export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
          Education & Training
        </h2>
        <Tabs defaultValue="certifications" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
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
                  <FlipCard cert={cert} />
                </motion.div>
              ))}
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
