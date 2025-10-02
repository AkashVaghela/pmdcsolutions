
"use client";
import Footer from '@/components/footer.component';
import NavBar from '@/components/navbar.component';
const ThemeInitializer = dynamic(() => import('@/components/theme-initializer.component'), { ssr: false });
import dynamic from 'next/dynamic';


export default function RootLayout({
  children,
}) {    
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <ThemeInitializer />
    </>
  );
}
