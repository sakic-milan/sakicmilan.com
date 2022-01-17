import Header from "@components/Header";
import Footer from "@components/Footer";
import MainContainer from "../../components/MainContainer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
