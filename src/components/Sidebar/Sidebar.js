import NavList from "../NavList";
import { ReactComponent as Logo } from "../../logo.svg";
import styles from "./Sidebar.module.css";
import { Paper } from "@mui/material";

const Sidebar = ({ className }) => (
  <div className={styles.Sidebar}>
    <Logo className={styles.Sidebar__Logo} />
    <NavList />
  </div>
);

export default Sidebar;
