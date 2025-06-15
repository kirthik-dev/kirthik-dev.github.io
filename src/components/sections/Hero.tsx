
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0 animated-gradient -z-10" />
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider">
          Kirthik B
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light tracking-wide">
          Data Engineer & AI Engineer
        </p>
        <p className="mt-3 text-lg md:text-xl text-primary font-medium tracking-wide">
          Engineering Data, Crafting Intelligence
        </p>
        <div className="mt-6 text-base md:text-lg text-primary-foreground/80 h-14 md:h-7">
          <TypeAnimation
            sequence={[
              "Building scalable ETL pipelines in PySpark & Python...",
              2000,
              "Leading data quality engines and real-time ingestion...",
              2000,
              "Architecting ML-powered data systems on GCP...",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce h-12 w-12 rounded-full"
        >
          <ArrowDown className="h-8 w-8" />
        </Button>
      </Link>
    </section>
  );
}
