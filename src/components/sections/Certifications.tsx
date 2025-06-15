
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-center">
          Certifications
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.name} variants={itemVariants}>
              <CertificationCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
