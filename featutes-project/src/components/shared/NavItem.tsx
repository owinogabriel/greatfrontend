interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="duration-300 font-semibold text-sm text-gray-300 ease-linear cursor-pointer hover:text-amber-100 py-3"
      >
        {text}
      </a>
    </li>
  );
};
