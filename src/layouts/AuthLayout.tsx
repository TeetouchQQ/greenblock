import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen text-white bg-gradient">
            <Navbar />
            <main className="flex-1 flex">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;