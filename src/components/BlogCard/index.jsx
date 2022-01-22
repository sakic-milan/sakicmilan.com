import Link from "next/link";
import styles from "./styles.module.scss";

const BlogCard = ({ data }) => {
  const { title, content, slug } = data;
  return (
    <article className={styles.blog_card}>
      <Link href={`blog/${slug}`}>
        <a>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <hr className={styles.title_underline} />
            <p className={styles.preview}>{content}</p>
          </div>
          <span className={styles.read_more}>Read more</span>
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
