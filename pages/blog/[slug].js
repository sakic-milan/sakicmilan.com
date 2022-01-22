import SingleBlogPost, {
  getStaticProps as getStaticPropsPage,
  getStaticPaths as getStaticPathsPage,
} from "@views/SingleBlogPost";
export default SingleBlogPost;

export const getStaticProps = getStaticPropsPage;
export const getStaticPaths = getStaticPathsPage;
