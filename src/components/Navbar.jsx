import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, handleSingOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between">
            <div>

            </div>
            <div className="flex gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    {
                        user ? <div><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /></div> : <img src={userIcon} alt="" />
                    }
                    {
                        user? <button onClick={handleSingOut} to="/auth/login" className="text-white font-bold bg-black py-2 px-6">Log Out</button> : <Link to="/auth/login" className="text-white font-bold bg-black py-2 px-6">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;