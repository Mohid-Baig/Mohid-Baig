import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import mohidlogo from "../assets/mohidlogo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={mohidlogo}
            className="mx-2"
            width={120}
            height={55}
            alt="Logo"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mohid-baig/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Mohid-Baig"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mohidbaigdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/mohid-baig/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        > */}
        <FaSquareXTwitter className="cursor-pointer" />
        {/* </a> */}
      </div>
    </nav>
  );
};

export default NavBar;
