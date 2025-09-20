import { Shield } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <Shield className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
      <span className="text-xl font-bold font-headline text-foreground whitespace-nowrap">
        Protective Facilities
      </span>
    </div>
  );
}
