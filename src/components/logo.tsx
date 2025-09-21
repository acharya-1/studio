import { Users, Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative bg-primary p-2 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
        <Users className="h-6 w-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-xl font-bold font-headline text-inherit whitespace-nowrap">
        StaffHub
      </span>
    </div>
  );
}
