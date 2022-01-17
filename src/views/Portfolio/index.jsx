import ProjectCard from "../../components/ProjectCard";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <>
      <h1 className="pageTitle">Portfolio</h1>
      <p className="pageDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <section className={styles.portfolio_section}>
        <aside className={styles.sidebar}>
          <div className={styles.filters}>Filter projects</div>
        </aside>
        <div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
