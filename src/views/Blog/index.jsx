import BlogCard from "../../components/BlogCard";
import styles from "./styles.module.scss";

const Blog = ({ postsPayload }) => {
  const { data: posts, meta } = postsPayload;

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
        {posts.map(({ id, attributes }) => (
          <BlogCard key={id} data={attributes} />
        ))}
      </section>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:1337/api/posts`);
  const postsPayload = await res.json();

  return { props: { postsPayload } };
}

export default Blog;
