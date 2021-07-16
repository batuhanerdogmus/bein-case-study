import Head from "next/head";
import Footer from "./footer";
import Nav from "./nav";
// import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Bein</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
