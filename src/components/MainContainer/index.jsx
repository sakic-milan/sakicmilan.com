import styles from "./styles.module.scss";

const MainContainer = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainContainer;
