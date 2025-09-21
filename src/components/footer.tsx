import Link from "next/link";
import { Logo } from "./logo";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative pt-24">
      <div className="absolute top-0 left-0 w-full h-full angled-section-footer bg-gray-900"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
             <Link href="/" aria-label="Back to homepage" className="mb-6 inline-block">
                <Logo />
            </Link>
            <p className="text-gray-400 text-base max-w-xs mb-6 leading-relaxed">
              Connecting businesses with skilled professionals instantly.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Github" className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors duration-300">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/quote" className="text-gray-400 hover:text-primary transition-colors duration-300">Request Staff</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest updates on workforce trends and StaffHub features.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                Go
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} StaffHub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
