import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-2xl font-bold">Alert Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
