import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/app/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
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
