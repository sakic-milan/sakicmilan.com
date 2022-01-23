import Image from "next/image";

import styles from "./styles.module.scss";

const Chip = ({ name }) => {
  return <span className={styles.chip}>{name}</span>;
};

const ProjectCard = ({ project }) => {
  console.log(project);

  const { title, demoUrl, repositoryUrl, description, image, technologies } =
    project;

  const imageUrl = image.data.attributes.url;

  const techs = technologies.data.map((el) => el.attributes.name);

  return (
    <article className={styles.project_card}>
      <image className={styles.project_image}>
        <Image
          src={"/testimage.jpg"}
          alt="Picture of the author"
          layout="fill"
          height={"320px"}
          width={"400px"}
        />
      </image>
      <div className={styles.project_data}>
        <div>
          <h1 className={styles.project_title}>{title}</h1>
          <hr className={styles.title_underline} />
          <p className={styles.project_description}>{description}</p>
        </div>
        <div>
          <div className={styles.project_technologies}>
            <div>Technologies:</div>
            {techs.map((tech, i) => (
              <Chip key={i} name={tech} />
            ))}
          </div>
          <div className={styles.project_resources}>
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.resource_link}
            >
              Repositiory
            </a>
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.resource_link}
            >
              Live preview
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
