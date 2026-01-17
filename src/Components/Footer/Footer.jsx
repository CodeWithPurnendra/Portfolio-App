import "./Footer.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <h3 className="footer-title">Ready to build something amazing?</h3>

      <p className="footer-paragraph">
        I'm always excited to collaborate on new and challenging projects. Let's
        create an exceptional user experience together.
      </p>

      <a
        href="mailto:purnendranishad5@gmail.com"
        className="footer-btn"
        aria-label="Send email"
      >
        Say Hello!
      </a>
      <div className="footer-socials">
        <a
          href="https://github.com/CodeWithPurnendra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://discord.gg/purnendra_kumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Purnendra Kumar. All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
