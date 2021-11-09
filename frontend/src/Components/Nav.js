import React from 'react'
import {Link} from 'react-router-dom'
import "./style.css";

function Nav(){


    return(
        <>
        <nav className="navbar navbar-expand-sm fixed-top .navbar" style={{
        boxShadow: '0 20px 50px rgba(17, 32, 49, 0.15)',
        borderTop: '1px solid rgba(17, 32, 49, 0.5)',
        borderLeft: '1px solid rgba(17, 32, 49, 0.5)',
        backdropFilter: 'blur(5px)'
        }}>
  
  <ul class="navbar-nav">

    <li class="nav-item "  >
    <Link style={{ color:"#112031"}}  class="nav-link navbar" to="/">Invoice</Link>
    </li>

    <li class="nav-item">
      <Link style={{ color:"#112031"}} class="nav-link" to="/produc">Product</Link>
    </li>

    <li class="nav-item">
    <Link style={{ color:"#112031"}} class="nav-link" to="/reports">reports</Link>
    </li>
    

  </ul>
</nav>
        
        
        </>
    )
    
}
export default Nav