import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import styles from "./styles.module.scss";

const Checkbox = ({ name, handleSelect, checked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={name}
        className={styles.checkboxInput}
        name={name}
        value={name}
        checked={checked}
        onChange={handleSelect}
      />
      <label htmlFor={name} className={styles.checkboxLabel}>
        {name}
      </label>
    </div>
  );
};

const Portfolio = ({ projectsPayload }) => {
  const [allProjects, setAllProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selected, setSelected] = useState([]);

  const { data: projects, meta } = projectsPayload;

  const getTechnologies = async () => {
    const res = await fetch("http://localhost:1337/api/technologies");
    const { data } = await res.json();
    const filters = data.map((el) => el.attributes.name);
    setFilters(filters);
  };

  console.log("Projects", projects);

  useEffect(() => {
    setDisplayProjects(allProjects);
    // if (filters.length === 0) {
    //   setDisplayProjects(allProjects);
    // } else {
    //   const proj = allProjects.filter((p) =>
    //     p.attributes.technologies.data
    //       .map((t) => t.attributes.name)
    //       .every((el) => filters.includes(el))
    //   );
    //   alert("called");
    //   setDisplayProjects(proj);
    // }
  }, [filters, allProjects]);

  useEffect(() => {
    setAllProjects(projects);
    getTechnologies();
  }, []);

  const handleSelect = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.name]);
    } else {
      setSelected(selected.filter((el) => el !== e.target.name));
    }
  };

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
            {filters.map((filter) => (
              <Checkbox
                key={filter}
                name={filter}
                handleSelect={handleSelect}
                checked={selected.includes(filter)}
              />
            ))}
          </div>
        </aside>
        <div>
          {displayProjects.map(({ id, attributes }) => (
            <ProjectCard key={id} project={attributes} />
          ))}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:1337/api/projects?populate=image,technologies`
  );
  const projectsPayload = await res.json();

  return { props: { projectsPayload } };
}
export default Portfolio;
