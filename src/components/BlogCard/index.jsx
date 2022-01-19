import Link from "next/link";
import styles from "./styles.module.scss";

const BlogCard = () => {
  return (
    <article className={styles.blog_card}>
      <Link href={"blog/test-blog-post"}>
        <a>
          <div>
            <h1 className={styles.title}>
              This is title of super exiting blog poston my website
            </h1>
            <hr className={styles.title_underline} />
            <p className={styles.preview}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <span className={styles.read_more}>Read more</span>
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
