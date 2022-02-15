import { Link } from "react-router-dom";
export const Navbar = ()=>{
    return (
        <div>
            <Link to="/">Sign in</Link>
            <Link to="/login">Login</Link>
        </div>
    )
};