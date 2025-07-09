import { useEffect } from "react";
import { Navbar } from "./elements/Navbar";
import Footer from "./elements/Footer";

// Defining Layout
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  //useEffect rendered for web title display when onmount
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-20 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};
