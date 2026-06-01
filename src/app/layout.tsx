import { ThemeProvider } from '@/components/layout/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { site } from '@/lib/content';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: site.metadata.title,
    template: `%s · ${site.name}`,
  },
  description: site.metadata.description,
  keywords: site.metadata.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header name={site.name} />
          <main id="main" className="flex flex-col items-center flex-grow pt-8 sm:pt-8 gap-8 overflow-y-auto">
            {children}
          </main>
          <Footer name={site.name} />
        </ThemeProvider>
      </body>
    </html>
  );
}
