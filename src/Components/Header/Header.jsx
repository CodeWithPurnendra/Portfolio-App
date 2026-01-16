import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2>
          Building <span>interactive</span> UIs with React.
        </h2>

        <p>
          Passionate Frontend Developer focused on creating dynamic,
          user-centric web applications and delivering exceptional digital
          experiences.
        </p>

        <button className="explore">Explore My Work</button>
      </div>

      <div className="header-image">
        <img src="/Image/purnendra.jpg" alt="Portrait of frontend developer" />
      </div>
    </header>
  );
}

export default Header;
