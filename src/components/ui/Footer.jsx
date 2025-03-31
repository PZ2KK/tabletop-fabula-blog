import { Linkedin, Github, Globe } from "lucide-react";

const Footer = () => {
    return (
      <footer className="flex justify-between items-center w-full md:px-[140px] md:py-6 px-6 py-4 bg-gray-100 text-gray-800 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold md:mr-4 mr-0">
              Get in touch
          </span>
          <a href="https://www.linkedin.com/in/kasiphit-weerakul/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://github.com/PZ2KK" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-purple-600" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <Globe className="w-5 h-5 hover:text-green-600" />
          </a>
        </div>

        <a href="/" className="underline hover:text-gray-500 font-bold">
          <h1>Home page</h1>
        </a>
      </footer>
    );
  };

export default Footer;