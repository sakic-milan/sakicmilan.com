import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await fetch(
      "http://localhost:1337/api/posts?pagination[page]=1&pagination[pageSize]=3"
    );
    const { data } = await res.json();
    console.log("DTA", data);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_about}>
          <span className={styles.footer_columnTitle}>sakicmilan.com</span>
          <span>
            This website is made as my personal and professional presentation.
            Here you can find more informations about me, projects that I build
            on my own as well all source codes and my blog where I post some
            useful content mostly for me as reminder but also for all developers
            who may find it useful.
          </span>
        </div>
        <div className={styles.footer_posts}>
          <span className={styles.footer_columnTitle}>Latest articles</span>
          <span>
            {posts.map(({ id, attributes }) => (
              <Link key={id} href={`/blog/${attributes.slug}`}>
                <a>{attributes.title}</a>
              </Link>
            ))}
          </span>
        </div>
        <div className={styles.footer_links}>
          <span className={styles.footer_columnTitle}>Links</span>
          <Link href={`/Sakic Milan Resume.pdf`}>
            <a target="_blank" alt="Resume pdf" rel="noopener noreferrer">
              My Resume
            </a>
          </Link>
          <Link href={`/portfolio`}>
            <a>Portfolio</a>
          </Link>
          <Link href={"https://www.linkedin.com/in/sakicmilan/"}>
            <a target="_blank">LinkedIn</a>
          </Link>
          <Link href={`/blog/`}>
            <a>Blog</a>
          </Link>
          <Link href={`/contact`}>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
