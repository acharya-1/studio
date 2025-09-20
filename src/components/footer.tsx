import Link from "next/link";
import { Logo } from "./logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-6 md:mb-0">
             <Link href="/" aria-label="Back to homepage" className="mb-6 inline-block">
                <Logo />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Flexible Manpower Solutions for Your Business.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold text-foreground mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/quote" className="text-muted-foreground hover:text-primary transition-colors">Request Staff</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                    <ul className="space-y-3">
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
                 <div className="col-span-2">
                    <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                     <div className="flex space-x-4">
                        <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} StaffHub. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
