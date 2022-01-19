import BlogCard from "../../components/BlogCard";
import styles from "./styles.module.scss";

const Blog = () => {
  return (
    <>
      <h1 className="pageTitle">Blog</h1>
      <p className="pageDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <section className={styles.blog_posts}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </>
  );
};

export default Blog;
