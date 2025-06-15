
import { motion } from "framer-motion";

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

const FlipCard = ({ cert }: { cert: (typeof certifications)[0] }) => (
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
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-foreground text-primary font-bold py-1 px-3 rounded text-sm hover:bg-primary-foreground/90"
        >
          Verify
        </a>
      </div>
    </div>
  </div>
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
              <FlipCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
