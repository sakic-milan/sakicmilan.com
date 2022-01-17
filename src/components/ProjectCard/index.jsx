import Image from "next/image";

import styles from "./styles.module.scss";

const Chip = () => {
  return <span className={styles.chip}>Javascript</span>;
};

const ProjectCard = () => {
  return (
    <article className={styles.project_card}>
      <image className={styles.project_image}>
        <Image
          src={"/testimage.jpg"}
          alt="Picture of the author"
          width={"450"}
          height={"320"}
        />
      </image>
      <div className={styles.project_data}>
        <div>
          <h1 className={styles.project_title}>Super awesome website</h1>
          <hr className={styles.title_underline} />
          <p className={styles.project_description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum has been the industrys standard
            dummy text.
          </p>
        </div>
        <div>
          <div className={styles.project_technologies}>
            Technologies: <Chip />
            <Chip />
            <Chip />
            <Chip />
          </div>
          <div className={styles.project_resources}>
            <a
              href="github.com"
              target="_blank"
              className={styles.resource_link}
            >
              Repositiory
            </a>
            <a
              href="github.com"
              target="_blank"
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
