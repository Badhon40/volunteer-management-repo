import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            {/* nav */}
                <Navbar></Navbar>
            {/* outlets */}
                <Outlet></Outlet>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;