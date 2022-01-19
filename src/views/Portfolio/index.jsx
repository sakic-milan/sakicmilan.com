import ProjectCard from "../../components/ProjectCard";
import styles from "./styles.module.scss";

const Checkbox = () => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id="vehicle1"
        className={styles.checkboxInput}
        name="vehicle1"
        value="Bike"
      />
      <label htmlFor="vehicle1" className={styles.checkboxLabel}>
        {" "}
        I have a bike
      </label>
    </div>
  );
};

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
          <div className={styles.checkboxGroup}>
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
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
