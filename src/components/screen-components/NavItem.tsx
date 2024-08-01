import { NavItemProps } from "../../types/nav-item";
import navItemStyles from "../../styles/molecules/navItem.module.css";

export default function NavItem({ title, icon }: NavItemProps) {
  return (
    <li className={navItemStyles.item}>
      <span>{icon}</span>
      <p>{title}</p>
    </li>
  )
}
