import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <div className="max-w-[1255px] mx-auto">
            {/* nav */}
                <Navbar></Navbar>
            {/* outlets */}
               <div className="min-h-[calc(100vh-360px)]">
               <Outlet></Outlet>
               </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Layout;