import type { NavItemProps } from "../../interface";

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="duration-300 font-semibold text-[10px] md:text-sm text-[#BCBCBC] ease-linear cursor-pointer hover:text-amber-100 py-3"
      >
        {text}
      </a>
    </li>
  );
};
