import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 p-4 font-extralight fixed w-full bottom-0 shadow-lg z-10">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Alert Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
