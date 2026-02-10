import "./Header.css";

function Header() {
  return (
    <header className="header-container" role="banner">
      <div className="header-content">
        <h1>
          Building <span>interactive</span> UIs with React.
        </h1>

        <p>
          Passionate Frontend Developer focused on crafting dynamic,
          user-centric web applications and delivering exceptional digital
          experiences.
        </p>

        <a
          href="https://github.com/CodeWithPurnendra"
          target="_blank"
          rel="noopener noreferrer"
          className="explore"
          aria-label="Explore my projects on GitHub"
        >
          Explore My Work
        </a>
      </div>

      <div className="header-image">
        <img
          src="/Image/purnendra.jpg"
          alt="Purnendra Kumar, Frontend Developer"
          loading="lazy"
        />
      </div>
    </header>
  );
}

export default Header;
