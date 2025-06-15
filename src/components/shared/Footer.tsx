
import { Link } from "react-scroll";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kirthik B. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
            <Link to="hero" smooth={true} duration={500} className="text-sm hover:text-primary cursor-pointer">Back to Top</Link>
        </div>
      </div>
    </footer>
  );
}
