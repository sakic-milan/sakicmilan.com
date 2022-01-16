import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_about}>
          <span className={styles.footer_columnTitle}>sakicmilan.com</span>
          <span>
            This website is made as my personal and professional presentation.
            Here you can find more informations about me, projects that I build
            on my own as well all source codes and my blog where I post some
            useful content mostly for me as reminder but also for all developers
            who may find it useful.
          </span>
        </div>
        <div className={styles.footer_posts}>
          <span className={styles.footer_columnTitle}>Latest articles</span>
          <span>
            <div>What is virtual dom in react</div>
            <div>Why you need to learn GraphQL</div>
            <div>Why you should contribute in opensource projects</div>
          </span>
        </div>
        <div className={styles.footer_links}>
          <span className={styles.footer_columnTitle}>Links</span>
          <span>Download Resume</span>
          <span>Projects</span>
          <span>LinkedIn</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
