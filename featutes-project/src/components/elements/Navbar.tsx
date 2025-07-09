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
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      {/* Used the container for consistent padding and centering */}
      <Container className="">
        <nav className="w-full flex justify-between gap-6 relative bg-gray-400 ">
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              {" "}
              <img src={logo} alt="abstract" className="w-full" />
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
                       absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                       border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            {/* Flex container for nav items and button.
             * Mobile: column, absolute, full-width, hidden overflow.
             * Desktop: row, static, transparent background, visible overflow.
             */}
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                         pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-6 gap-x-7 
                         text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {/* Unordered list for navigation items.
               * Mobile: border-top, padding.
               * Desktop: no border, no padding, row layout, centered.
               */}
              {navItems.map((item, index) => (
                <NavItem href={item.href} text={item.text} key={index} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
