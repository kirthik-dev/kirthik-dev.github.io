
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { educationItems } from "@/data/education";
import { Link, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8" /> Certifications & Training
          </h2>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden border shadow-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">📅 Date</TableHead>
                  <TableHead>🏫 Course / Certification</TableHead>
                  <TableHead>🎖️ Platform / Institute</TableHead>
                  <TableHead className="text-right">🔗 Credential / Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educationItems.map((item) => (
                  <TableRow key={item.title}>
                    <TableCell className="font-medium text-muted-foreground">{item.date}</TableCell>
                    <TableCell className="font-semibold">{item.title}</TableCell>
                    <TableCell>{item.platform}</TableCell>
                    <TableCell className="text-right">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:underline"
                        >
                          View <Link className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
