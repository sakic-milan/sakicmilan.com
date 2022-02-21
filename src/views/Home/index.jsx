import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.page}>
      <section className={styles.profile_box}>
        <div className={styles.badges}>
          {" "}
          {/* <img src={"/icons/js.svg"} />
          <img src={"/icons/html.svg"} />
          <img src={"/icons/css.svg"} />
          <img src={"/icons/tailwind.svg"} />
          <img src={"/icons/mui.svg"} />
          <img src={"/icons/bootstrap.svg"} />
          <img src={"/icons/react.svg"} />
          <img src={"/icons/next.svg"} />
          <img src={"/icons/gatsby.svg"} />
          <img src={"/icons/jquery.svg"} />
          <img src={"/icons/redux.svg"} />
          <img src={"/icons/typescript.svg"} />
          <img src={"/icons/mobx.svg"} />
          <img src={"/icons/firebase.svg"} />
          <img src={"/icons/postgresql.svg"} />
          <img src={"/icons/mysql.svg"} />
          <img src={"/icons/nodejs.svg"} />
          <img src={"/icons/express.svg"} />
          <img src={"/icons/git.svg"} />
          <img src={"/icons/github.svg"} />
          <img src={"/icons/mongodb.svg"} />
          <img src={"/icons/graphql.svg"} />
          <img src={"/icons/apollo.svg"} />
          <img src={"/icons/jest.svg"} />
          <img src={"/icons/strapi.svg"} />
          <img src={"/icons/socket.svg"} />
          <img src={"/icons/babel.svg"} />
          <img src={"/icons/webpack.svg"} />
          <img src={"/icons/npm.svg"} />
          <img src={"/icons/yarn.svg"} />
          <img src={"/icons/sass.svg"} />
          <img src={"/icons/grunt.svg"} />
          <img src={"/icons/gulp.svg"} />
          <img src={"/icons/rn.svg"} />
          <img src={"/icons/mocha.svg"} />
          <img src={"/icons/gitlab.svg"} />
          <img src={"/icons/bitbucket.svg"} />
          <img src={"/icons/jwt.svg"} />
          <img src={"/icons/jenkins.svg"} />
          <img src={"/icons/docker.svg"} />
          <img src={"/icons/angular.svg"} />
          <img src={"/icons/vue.svg"} />
          <img src={"/icons/electron.svg"} />
          <img src={"/icons/svelte.svg"} />
          <img src={"/icons/ngrx.svg"} />
          <img src={"/icons/heroku.svg"} />
          <img src={"/icons/netlify.svg"} /> */}
        </div>

        <div className={styles.profile_image}></div>
      </section>
      <section className={styles.content}>
        <aside className={styles.home_sidebar}>
          <Link href={"https://www.linkedin.com/in/sakicmilan/"}>
            <a target="_blank" className={styles.home_cta}>
              LinkedIn
            </a>
          </Link>
          <Link href={`/Sakic Milan Resume.pdf`}>
            <a
              target="_blank"
              alt="alt text"
              rel="noopener noreferrer"
              className={styles.home_cta}
            >
              My Resume
            </a>
          </Link>
          <Link href={`/portfolio`}>
            <a className={styles.home_cta}>Portfolio</a>
          </Link>
        </aside>
        <main>
          <article className={styles.info_home}>
            <h2>About</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>{" "}
          </article>
          <article className={styles.info_home}>
            <h2>Experience</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </article>
        </main>
      </section>
    </main>
  );
};

export default Home;
