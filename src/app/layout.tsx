import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Himanshu Pathak | Full Stack Developer & AI/ML Enthusiast',
  description: 'Portfolio of Himanshu Pathak - Full Stack Developer and AI/ML Enthusiast',
  keywords: ['Full Stack Developer', 'AI/ML', 'Web Development', 'React', 'Next.js', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 