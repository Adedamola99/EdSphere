import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <img src="./icons/logo.svg" alt="logo" width={60} />
        </Link>

        <Link href="/login" className="text-white">
            <FontAwesomeIcon className="mr-2" icon={faUser} /> Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
