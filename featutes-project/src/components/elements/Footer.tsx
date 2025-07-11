import { Container } from "../shared/Container";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col justify-center items-center">
          <ul className="flex gap-6">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
            <p className="text-sm font-medium md:text-lg md:mt-6">
              © 2025 Abstractly,Inc. All rights reserved.
            </p>
        </div>
      </Container>
    </footer>
  );
};
