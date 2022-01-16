import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HamburgerMenu, CloseHamburgerMenu } from "../icons";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useWindowSize } from "../../hooks/useWindowSize";
import { PAGES } from "./pages.js";
import styles from "./styles.module.scss";

import { useRouter } from "next/router";

const Header = () => {
  const [expandMobileMenu, setExpandMobileMenu] = useState(false);

  const { pathname } = useRouter();
  const ref = useRef();

  const toggleMenu = () => {
    setExpandMobileMenu(!expandMobileMenu);
  };

  // useOutsideClick(ref, toggleMenu);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 900) {
      setExpandMobileMenu(false);
    }
  }, [width]);

  const menu = PAGES.map(({ name, path, target }) => (
    <li
      key={name}
      className={`${pathname === path ? styles.activeMenuItem : ""}`}
    >
      <Link href={path}>
        <a target={target}>{name}</a>
      </Link>
    </li>
  ));

  const MobileMenu = () => <div className={styles.mobileMenu}>{menu}</div>;

  return (
    <div className={styles.header}>
      <nav className={styles.header_nav}>
        <Link href="/">
          <a className={styles.header_logo}>{"<sakicmilan/>"}</a>
        </Link>
        <menu className={styles.header_menu}>{menu}</menu>

        <span
          className={`${styles.header_hamburgerMenu} ${
            expandMobileMenu && styles.hamburgerMenuOpened
          }`}
          onClick={toggleMenu}
        >
          {expandMobileMenu ? <CloseHamburgerMenu /> : <HamburgerMenu />}
        </span>
      </nav>

      {expandMobileMenu && (
        <div ref={ref}>
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
