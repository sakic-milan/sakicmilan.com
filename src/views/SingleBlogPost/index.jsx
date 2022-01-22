import styles from "./styles.module.scss";
import BlogCard from "@components/BlogCard";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const SingleBlogPost = ({ data, keywords }) => {
  const { title, content } = data;

  return (
    <section className={styles.single_post_section}>
      <article className={styles.article}>
        <h1 className="pageTitle">{title}</h1>
        <main className={styles.post_content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </main>

        <div className={styles.promo_text}>
          Thanks for reading! You can find me on LinkedIn{" "}
          <Link href="https://www.linkedin.com/in/sakicmilan/">
            <a>in/sakicmilan/</a>
          </Link>{" "}
          or you can check my portfolio here{" "}
          <Link href="/portfolio">
            <a>sakicmilan.com/portfolio</a>
          </Link>
        </div>
      </article>
      <aside className={styles.blogSuggestion}>
        <p>I found these related and popular:</p>

        <BlogCard data={data} />
        <BlogCard data={data} />
      </aside>
    </section>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetch(
    `http://localhost:1337/api/posts?populate=technologies&?filters[slug][$eq]=${slug}`
  );
  const { data } = await res.json();

  const keywords = data[0].attributes.technologies.data.map(
    (el) => el.attributes.name
  );

  return {
    props: {
      data: data[0].attributes,
      keywords,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/posts");
  let { data } = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((data) => ({
    params: { slug: data.attributes.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths,
    fallback: "blocking",
  };
}

export default SingleBlogPost;
