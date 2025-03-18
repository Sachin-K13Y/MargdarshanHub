import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import axiosInstance from "../services";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [authenticated,setAuthenticated] = useState(false);

    useEffect(() => {
        const verifyAuthentication = async () => {
            try {
                const response = await axiosInstance.get("/user/auth", { withCredentials: true });
    
                console.log(response.data.Success);
    
                setAuthenticated(response.data.Success);
            } catch (error) {
                console.error("Error verifying authentication:", error);
                setAuthenticated(false);
            }
        };
    
        verifyAuthentication();
        
    }, []);
  return (
    <nav className="bg-blue-600 shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">MargdarshanHub</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/ask">Ask Question</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/profile">Profile</Link>
          {authenticated ? (
  <Link to="/logout">Logout</Link>
) : (
  <>
    <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
  </>
)}

        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-blue-700 text-white py-3 space-y-3">
          <Link to="/">Home</Link>
          <Link to="/ask">Ask Question</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
