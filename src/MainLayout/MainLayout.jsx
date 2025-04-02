import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
