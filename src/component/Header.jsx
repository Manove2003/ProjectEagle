import React from "react";
import logo from "../assets/logo.png"; 
import avatar1 from "../assets/E1.png"; 
import avatar2 from "../assets/E2.png";
import avatar3 from "../assets/E3.png";
import avatar4 from "../assets/E4.png";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-t from-[#0B1E3F] to-[#0E3C7E] py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 w-auto" />

        {/* Right Section */}
        <div className="flex items-center flex-wrap gap-3 mt-3 sm:mt-0">
          
          {/* Stars */}
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.45a1 1 0 00.95.69h3.623c.969 0 1.371 1.24.588 1.81l-2.93 2.127a1 1 0 00-.364 1.118l1.12 3.45c.3.921-.755 1.688-1.54 1.118l-2.93-2.127a1 1 0 00-1.176 0l-2.93 2.127c-.785.57-1.84-.197-1.54-1.118l1.12-3.45a1 1 0 00-.364-1.118L2.768 8.877c-.783-.57-.38-1.81.588-1.81h3.623a1 1 0 00.95-.69l1.12-3.45z" />
              </svg>
            ))}
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2">
            {[avatar1, avatar2, avatar3, avatar4].map((avatar, idx) => (
              <img
                key={idx}
                src={avatar}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* Text */}
          <span className="text-white text-sm">
            1.4k People are <br></br>Happy in USA
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
