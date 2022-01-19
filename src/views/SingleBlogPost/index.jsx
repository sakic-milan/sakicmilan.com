import styles from "./styles.module.scss";
import BlogCard from "@components/BlogCard";
import Link from "next/link";

const SingleBlogPost = () => {
  return (
    <section className={styles.single_post_section}>
      <article>
        <h1 className="pageTitle">
          This is title of super exiting blog poston my website
        </h1>
        <main className={styles.post_content}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de
          Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This bok is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, Lorem
          ipsum dolor sit amet..s, comes from a line in section 1.10.32.
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
        <BlogCard />
        <BlogCard />
      </aside>
    </section>
  );
};

export default SingleBlogPost;
