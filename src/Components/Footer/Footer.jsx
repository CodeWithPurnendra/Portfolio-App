import "./Footer.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning ☀️"
      : hour < 18
      ? "Good afternoon 👋"
      : "Good evening 🌙";

  const message =
    hour < 18
      ? "Got an idea or a project in mind? Let's build something meaningful."
      : "Late-night ideas are the best ones. Let's turn yours into reality.";

  const socials = [
    {
      href: "https://github.com/CodeWithPurnendra",
      label: "GitHub profile",
      icon: <FaGithub />,
    },
    {
      href: "https://linkedin.com/in/purnendrakumar",
      label: "LinkedIn profile",
      icon: <FaLinkedin />,
    },
    {
      href: "https://discord.gg/purnendra_kumar",
      label: "Discord profile",
      icon: <FaDiscord />,
    },
  ];

  return (
    <footer className="footer-container" role="contentinfo">
      <h2 className="footer-title">
        {greeting} Ready to create something amazing?
      </h2>

      <p className="footer-paragraph">{message}</p>

      <a
        href="mailto:purnendranishad5@gmail.com"
        className="footer-btn"
        aria-label="Send an email to Purnendra"
      >
        Start the conversation
      </a>

      <nav className="footer-socials" aria-label="Social links">
        {socials.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </nav>

      <p className="footer-copy">
        © {year} <strong>Purnendra Kumar</strong> · Built with curiosity & code
      </p>
    </footer>
  );
}

export default Footer;
