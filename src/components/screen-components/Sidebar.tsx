import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCampaign } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import sidebarStyles from "../../styles/molecules/sidebar.module.css";
import NavItem from "./NavItem";
import React from "react";

const navs = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome />
  },
  {
    title: "Campaigns",
    icon: <MdOutlineCampaign />
  },
  {
    title: "Chat",
    icon: <BsChat />
  },
  {
    title: "Support Center",
    icon: <HiOutlineSupport />
  },
  {
    title: "Leads",
    icon: <AiOutlineDollar />
  },
  {
    title: "Archive",
    icon: <IoBriefcaseOutline />
  }
];

export default function Sidebar() {
  return (
    <aside className={sidebarStyles.aside}>
      <div>
        <h1>Orbut</h1>
        <p>Logout</p>
      </div>
      <nav>
        <ul>
          {navs.map((item: {title: string, icon: React.ReactNode}) => (
            <NavItem title={item.title} icon={item.icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
