import { useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import {
  CalendarEvent,
  LayoutDashboard,
  Notes,
  Users,
} from "tabler-icons-react";
import styles from "../styles/Layout.module.scss";

const Logo: FC = () => {
  const theme = useMantineTheme();

  return (
    <div className={styles.Logo}>
      health
      <span style={{ color: theme.colors.main[1] }}>talk</span>
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
  const router = useRouter();

  return (
    <ul className={styles.NavbarContent}>
      <Link href="/">
        <li className={router.pathname === "/" ? styles.ActiveLink : ""}>
          <LayoutDashboard /> Dashboard
        </li>
      </Link>
      <Link href="/patients">
        <li
          className={router.pathname === "/patients" ? styles.ActiveLink : ""}
        >
          <Users /> Patients
        </li>
      </Link>
      <Link href="/notes">
        <li className={router.pathname === "/notes" ? styles.ActiveLink : ""}>
          <Notes /> Notes
        </li>
      </Link>
      <Link href="/calendar">
        <li
          className={router.pathname === "/calendar" ? styles.ActiveLink : ""}
        >
          <CalendarEvent /> Calendar
        </li>
      </Link>
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
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export { Layout };
