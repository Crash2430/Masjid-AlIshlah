import Navbar from "../components/Header/navbar";
import Footer from "../components/Footer/footer";
import { Outlet } from "react-router";
const RootLayout =() => {
    return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-[#008282] selection:text-white">
    <Navbar />
    <Outlet />
    <Footer />
    </div>    
    )
}
export default RootLayout;