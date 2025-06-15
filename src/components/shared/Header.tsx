
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "education", label: "Certifications & Training" },
  { to: "contact", label: "Contact" },
];

const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    {navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer text-foreground/80 hover:text-primary transition-colors font-medium"
        activeClass="text-primary"
        onClick={onLinkClick}
      >
        {link.label}
      </Link>
    ))}
  </>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-end gap-6 px-4">
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-6 mt-10">
                  <NavLinks onLinkClick={() => setIsOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
