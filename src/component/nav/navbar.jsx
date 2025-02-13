import React from "react"
import "./navbar.css"; 
import Polygon from "../../assets/icons/polygon";
import Ellipse from "../../assets/icons/Ellipse";

const Navbar = () => {
  return (
//   <hr>  
    <nav>
        <span className="span-name">
     <h1 className="motion"><span className="teni"><Ellipse/><Polygon/></span>Embrace</h1>

        </span>

        <ul className="Navlink">
           <a href="" className="href"> <li>How it Work</li></a>
            <a href="" className="href"><li>Our work</li></a>
          <a href="" className="href"><li>Pricing</li></a>
           <a href="" className="href"><li>About</li></a>

        </ul>
        <div className="btn1">
            <button className="btn2">Book A call</button>
        </div>
         {/* <h1>Teniola</h1> */}    
</nav>
// </hr>


  );
};

export default Navbar;
