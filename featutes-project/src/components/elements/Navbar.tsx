import { useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import logo from "/assets/abstractly.png";

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#features", text: "Feature" },
  { href: "#pricing", text: "Pricing" },
  { href: "#aboutUs", text: "About Us" },
  { href: "#contact", text: "Contact" },
];
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 z-50">
      {/* Full-width background wrapper */}
      <div className="w-full bg-[#F8FAFB]">
        <Container className="">
          <nav className="w-full flex justify-between items-center py-4 relative">
            {/* Logo - Left side */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="abstract"
                  className="w-24 sm:w-32 md:w-36"
                />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex gap-x-8 text-lg text-heading-2 hover:text-amber-300">
                {navItems.map((item, index) => (
                  <NavItem href={item.href} text={item.text} key={index} />
                ))}
              </ul>
            </div>

            {/* Desktop Buttons - Right side */}
            <div className="hidden lg:flex gap-4">
              <Button className="px-6 py-2 transform transition-transform  hover:bg-amber-50 text-gray-700 bg-white">
                Learn more
              </Button>
              <Button className="px-6 py-2 transform transition-transform hover:bg-blue-200 text-cyan-50 bg-blue-700">
                See Pricing
              </Button>
            </div>

            {/* Mobile Menu Button - Right side */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-gray-900 focus:outline-none p-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {/* Mobile Menu Dropdown - Outside the gray background */}
      {menuOpen && (
        <div className="lg:hidden bg-[#828282] mt-3 bg-opacity-95 rounded-md mx-4 mb-4 p-4 shadow-lg">
          <ul className="text-gray-900 space-y-3 text-lg font-medium mb-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-1 px-4 rounded font-medium text-gray-300 hover:text-amber-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Button className="w-full py-2 transform transition-transform hover:bg-amber-50 text-gray-700 bg-white">
              Learn more
            </Button>
            <Button className="w-full py-2 transform transition-transform hover:bg-blue-200 text-cyan-50 bg-blue-700">
              See Pricing
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
