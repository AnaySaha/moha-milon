import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li className="box-border border-r-2">
    <button className="join-item btn"><NavLink to="/">Home</NavLink></button>
      <button className="join-item btn"><NavLink to= "/login">Login</NavLink></button>
      <button className="join-item btn"><NavLink to= "/register">Register</NavLink></button>
      
    
    </li>
    </>
    
        return (
            <div className="join">
    
    
      {links}
    </div>
        );
    };
    

export default Navbar;