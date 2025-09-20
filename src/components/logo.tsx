import { Users } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="bg-primary p-1.5 rounded-lg">
        <Users className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-xl font-bold font-headline text-foreground whitespace-nowrap">
        StaffHub
      </span>
    </div>
  );
}
