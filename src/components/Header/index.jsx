import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.sass";

const activeLink = ({ isActive }) =>
  classNames(styles.link, { [styles.activeLink]: isActive });
function Header() {
  return (
    <nav>
      <ul className={styles.linksList}>
        <li>
          <NavLink className={activeLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to="/user">
            User Card
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to="/form">
            Form
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
