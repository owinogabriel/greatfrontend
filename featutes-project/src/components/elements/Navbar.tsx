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
  return (
    <header className="absolute inset-x-0 z-50">
      {/* Full-width background wrapper */}
      <div className="w-full bg-gray-400">
        <Container className="">
          <nav className="w-full flex justify-center gap-6 md:gap-x-7 relative">
            <div className="inline-flex relative">
              <a href="/" className="relative flex items-center gap-3">
                <img src={logo} alt="abstract" className="w-32 sm:w-full" />
              </a>
            </div>
            <div
              className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                         absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent
                         border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
            >
              <ul
                className=" border-t border-box-border lg:border-t-0 px-6 lg:px-0
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-6 gap-x-7
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center hover:text-amber-300"
              >
                {navItems.map((item, index) => (
                  <NavItem href={item.href} text={item.text} key={index} />
                ))}
              </ul>
              <div className="flex flex-row gap-6 justify-end">
                <Button className="w-36 transform transition-transform text-gray-700 bg-white">
                  Learn more
                </Button>
                <Button className="w-32 transform transition-transform text-cyan-50 bg-blue-700">
                  See Pricing
                </Button>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
