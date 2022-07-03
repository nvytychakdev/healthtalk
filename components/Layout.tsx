import { FC, ReactNode } from "react";
import {
  CalendarEvent,
  LayoutDashboard,
  Notes,
  Users,
} from "tabler-icons-react";
import styles from "../styles/Layout.module.scss";

const Logo: FC = () => {
  return (
    <div className={styles.Logo}>
      health
      <span className="text-emerald-400">talk</span>
    </div>
  );
};

const Header: FC = () => {
  return (
    <div className="h-16 flex items-center border-b border-solid border-neutral-700 w-full p-3">
      <div className="flex-1">Header left side</div>
      <div>Header right side</div>
    </div>
  );
};

const NavbarContent: FC = () => {
  return (
    <ul className={styles.NavbarContent}>
      <li>
        <LayoutDashboard /> Dashboard
      </li>
      <li>
        <Users /> Patients
      </li>
      <li>
        <Notes /> Notes
      </li>
      <li>
        <CalendarEvent /> Calendar
      </li>
    </ul>
  );
};

const Navbar: FC = () => {
  return (
    <div className="w-72 flex flex-col border-r border-solid border-neutral-700">
      <div className="h-16 p-3 flex items-center">
        <Logo />
      </div>
      <div className="p-3 flex-1">
        <NavbarContent />
      </div>
      <div className="p-3">Navbar footer</div>
    </div>
  );
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="flex-1">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Layout };
