import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaRegPaperPlane,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="py-5 flex justify-between items-center gap-5">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} | All rights reserved.
      </p>
      <div className="flex justify-center items-center gap-5">
        <Link
          className="hover:text-blue-400 duration-300 transition-all"
          href="/"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          className="hover:text-blue-400 duration-300 transition-all"
          href="/"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          className="hover:text-blue-400 duration-300 transition-all"
          href="/"
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          className="hover:text-blue-400 duration-300 transition-all"
          href="mailto:damriabdellah@gmail.com"
        >
          <FaRegPaperPlane size={24} />
        </Link>
      </div>
    </footer>
  );
};
