import { Users, Zap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
        <Users className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-0.5">
          <Zap className="h-2 w-2 text-yellow-800" />
        </div>
      </div>
      <span className="text-xl font-bold font-headline text-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300">
        StaffHub
      </span>
    </div>
  );
}
