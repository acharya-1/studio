import Link from "next/link";
import { Logo } from "./logo";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
             <Link href="/" aria-label="Back to homepage" className="mb-6 inline-block">
                <Logo />
            </Link>
            <p className="text-muted-foreground text-base max-w-xs mb-6 leading-relaxed">
              Connecting businesses with skilled professionals instantly. Your trusted partner for flexible workforce solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@staffhub.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>1-800-STAFFHUB</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Pricing</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/quote" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Request Staff</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Get the latest updates on workforce trends and StaffHub features.
            </p>
            <div className="flex gap-2 mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StaffHub. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Made with <span className="text-red-400">♥</span> in San Francisco
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
