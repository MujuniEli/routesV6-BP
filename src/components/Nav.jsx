import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/" className="site-logo">#Vanlife</Link>
        <div className="nav-list">
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
            <NavLink to="/host">Host</NavLink>
        </div>
    </nav>
  )
}

export default Nav