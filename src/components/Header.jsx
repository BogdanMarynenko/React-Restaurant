import { Link } from "react-router-dom";

function Header() {
  return <nav className="header">
      <div className="nav-wrapper">
        <Link href="" className="brand-logo">React-Shop</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/about" target="_blank" rel="noreferrer">About</Link></li>
          <li><Link to="/contact" target="_blank" rel="noreferrer">Contacts</Link></li>
        </ul>
        
      </div>
    </nav>
  
  }
   export {Header};