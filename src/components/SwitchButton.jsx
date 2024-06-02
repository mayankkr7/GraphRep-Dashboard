import React, { useState, useEffect } from 'react';

const SwitchButton = ({ options, selectedOption, onSelectOption }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg flex items-center justify-between mb-4">
      <span className="text-white font-bold">Alert Graph</span>
      {isMobile ? (
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className={`px-4 py-2 rounded w-52 ${selectedOption === 'All'
              ? 'bg-cyan-800 text-white'
              : 'bg-gray-700 text-gray-300'
              }`}
          >
            {selectedOption} <span className="ml-1">▾</span> {/* Dropdown arrow */}
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 w-full mt-2 bg-gray-800 rounded shadow-lg z-10">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onSelectOption(option);
                    toggleDropdown();
                  }}
                  className={`block w-full px-4 py-2 text-left ${selectedOption === option
                    ? 'bg-cyan-800 text-white'
                    : 'bg-gray-700 text-gray-300'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex-grow flex justify-center mr-20">
          <div className="flex space-x-4">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onSelectOption(option)}
                className={`px-4 py-2 rounded ${selectedOption === option
                  ? 'bg-sky-900 text-white'
                  : 'bg-gray-700 text-gray-300'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitchButton;
