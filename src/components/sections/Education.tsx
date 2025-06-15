
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const educationItems = [
    {
        title: "Fractal Data Science",
        description: "Issued by Coursera",
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
        logo: "https://img.icons8.com/color/144/coursera.png",
        link: "https://coursera.org/verify/professional-cert/9VRLU3VD5YWG",
        tag: "Certification"
    },
    {
        title: "Data Science Internship",
        description: "Completed at SmartKnower in 2023",
        image: "/lovable-uploads/e27d5d26-54ee-4188-a894-b5ab7530f32d.png",
        link: "/lovable-uploads/e27d5d26-54ee-4188-a894-b5ab7530f32d.png",
        tag: "Internship"
    },
    {
        title: "Data Engineering Bootcamp",
        description: "Completed with DataTalks.Club in 2023",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
        tag: "Bootcamp"
    },
    {
        title: "Advanced Python for Data Science",
        description: "Online workshop in 2024",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        tag: "Workshop"
    },
    {
        title: "Cloud Architecture on GCP",
        description: "Online workshop in 2023",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        tag: "Workshop"
    },
    {
        title: "Big Data Analytics",
        description: "Coursework at NIT Trichy (2023)",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
        tag: "Data Engineering"
    },
    {
        title: "Introduction to Machine Learning",
        description: "Coursework at NIT Trichy",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
        tag: "AI/ML"
    },
    {
        title: "Data Structures and Applications",
        description: "Minor in Computer Applications at NIT Trichy",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        tag: "Minor in CS"
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type EducationItemType = typeof educationItems[0];

const EducationCard = ({ item }: { item: EducationItemType }) => {
  const cardContent = (
    <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-primary/20 bg-card/80 backdrop-blur-sm">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
        <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
        {item.logo && (
          <img
            src={item.logo}
            alt="issuer logo"
            className="h-6 w-auto object-contain"
          />
        )}
      </CardFooter>
    </Card>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }
  return <div className="h-full">{cardContent}</div>;
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
