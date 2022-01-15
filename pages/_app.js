import Layout from "@views/Layout";
import "@styles/globals.css";
import "@styles/colors.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
