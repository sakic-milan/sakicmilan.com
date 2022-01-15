import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HamburgerMenu, CloseHamburgerMenu } from "../icons";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./styles.module.scss";

const Header = () => {
  const [expandMobileMenu, setExpandMobileMenu] = useState(false);

  const ref = useRef();

  const toggleMenu = () => {
    setExpandMobileMenu(!expandMobileMenu);
  };

  useOutsideClick(ref, toggleMenu);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 900) {
      setExpandMobileMenu(false);
    }
  }, [width]);

  const MobileMenu = () => (
    <div className={styles.mobileMenu}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>LinkedIn</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
    </div>
  );

  return (
    <div className={styles.header}>
      <nav className={styles.header_nav}>
        <span className={styles.header_logo}>{"<sakicmilan/>"}</span>
        <menu className={styles.header_menu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </menu>

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
