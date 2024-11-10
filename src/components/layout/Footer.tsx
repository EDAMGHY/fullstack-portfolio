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
          target="_blank"
          className="hover:text-blue-400 duration-300 transition-all"
          href="https://github.com/edamghy"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          target="_blank"
          className="hover:text-blue-400 duration-300 transition-all"
          href="https://linkedin.com/in/abdellah-damri/"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          target="_blank"
          className="hover:text-blue-400 duration-300 transition-all"
          href="https://x.com/damriabdellah"
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          target="_blank"
          className="hover:text-blue-400 duration-300 transition-all"
          href="mailto:damriabdellah@gmail.com"
        >
          <FaRegPaperPlane size={24} />
        </Link>
      </div>
    </footer>
  );
};
