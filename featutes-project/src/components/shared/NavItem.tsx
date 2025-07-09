
interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a href={href} className="duration-300 font-semibold text-gray-500 ease-linear hover:text-primary py-3">
        {text}
      </a>
    </li>
  )
}