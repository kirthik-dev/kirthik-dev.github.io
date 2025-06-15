
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto items-center">
          <div
            className="h-96 md:h-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7)` }}
          ></div>
          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}><Input placeholder="Your Name" className="bg-secondary/50 focus-visible:ring-offset-0 focus-visible:ring-primary/50"/></motion.div>
            <motion.div variants={itemVariants}><Input type="email" placeholder="Your Email" className="bg-secondary/50 focus-visible:ring-offset-0 focus-visible:ring-primary/50"/></motion.div>
            <motion.div variants={itemVariants}><Textarea placeholder="Your Message" rows={5} className="bg-secondary/50 focus-visible:ring-offset-0 focus-visible:ring-primary/50"/></motion.div>
            <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full text-lg animate-subtle-glow">
                Send Message
                </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
