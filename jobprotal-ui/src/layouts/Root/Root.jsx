import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Root = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
