import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-8">
        <div className="container mx-auto">
          <p className="text-lg">© 2024 Edsphere App. All rights reserved.</p>
          <div className="flex justify-center items-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-200 mx-2">Terms of Service</a>
            <span className="text-gray-400 mx-2">|</span>
            <a href="#" className="text-blue-400 hover:text-blue-200 mx-2">Privacy Policy</a>
            <span className="text-gray-400 mx-2">|</span>
            <a href="#" className="text-blue-400 hover:text-blue-200 mx-2">FAQs</a>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  