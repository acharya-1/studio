import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import { Figtree } from 'next/font/google';
import { cn } from '@/lib/utils';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: 'StaffHub - Flexible Manpower Solutions',
  description: 'Connect with skilled professionals instantly. From construction to events, find the perfect workforce for your business needs.',
  keywords: 'staffing, manpower, workforce, construction, events, skilled labor',
  authors: [{ name: 'StaffHub Team' }],
  openGraph: {
    title: 'StaffHub - Flexible Manpower Solutions',
    description: 'Connect with skilled professionals instantly. From construction to events, find the perfect workforce for your business needs.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("font-sans antialiased bg-background", figtree.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
