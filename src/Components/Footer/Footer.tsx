import React from "react";
import { FaGlobe, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FEFFF0] font-codefont py-4 px-6 flex flex-col items-center justify-between">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
        <div className="font-bold text-2xl text-black">Abdul Sami</div>
        <nav>
          <ul className="bg-[#FEFFF0] flex items-center space-x-6">
            <li>
              <a
                href="https://abdulsamiportfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <FaGlobe />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AbdulSamiWorks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdul-sami-42904125a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <FaLinkedin />
              </a>
            </li>
            {/* Optional: if you use Twitter or Peerlist, add your handles here */}
             <li>
              <a
                href="https://twitter.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://peerlist.io/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
              >
                <SiPeerlist />
              </a>
            </li> 
          </ul>
        </nav>
      </div>
      <div className="mt-4 text-black flex flex-col gap-1 md:gap-4 md:flex-row justify-center items-center">
        <p>abdulsami34421@gmail.com</p>
        <p>&copy; 2025 Abdul Sami</p>
      </div>
    </footer>
  );
};

export default Footer;
