import { AuthHeaderProps } from "../../types/headers";
import { MdNotificationsNone } from "react-icons/md";
import Avatar from "/images/avatar.png";
import headerStyles from "../../styles/molecules/header.module.css";

export function AuthHeader({ customHeaderStyles, children }: AuthHeaderProps) {
  return <header className={customHeaderStyles}>{children}</header>;
}

export function MainHeader({ title }: { title: string }) {
  return (
    <header className={headerStyles.main_header}>
      <h1>{title}</h1>
      <div className={headerStyles.user_container}>
        <span>
          <MdNotificationsNone />
        </span>
        <span>
          <img src={Avatar} alt="avatar" />
        </span>
        <strong>Ebenezer Frimpong</strong>
      </div>
    </header>
  );
}
