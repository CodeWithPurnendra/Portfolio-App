import "./NavBar.css";

function NavBar({ navLinks, logo, button }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 className="logo">{logo}</h1>

        <ul className="nav-links">
          {navLinks.map((links) => (
            <li key={links.id}>
              <a href={links.path}>{links.realName}</a>
            </li>
          ))}
        </ul>

        <button className="btn">{button}</button>
      </nav>
    </div>
  );
}

export default NavBar;
