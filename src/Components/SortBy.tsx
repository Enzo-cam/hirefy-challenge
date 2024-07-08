"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onSortChange: (value: string) => void;
}

const SortBy = ({ onSortChange }: Props) => {
  const [sortValue, setSortValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["All", "Feat", "Fix"];

  const handleOptionClick = (value: string) => {
    setSortValue(value);
    onSortChange(value);
    setIsOpen(false);
  };

  // Cada vez que se scrollee, automaticamente se cierra el select
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center pb-2 mb-2 border-b-2 ">
      <p className="mr-2 font-sans text-grisOscuro">Sort by:</p>
      <div 
        className="p-2 border rounded-full text-grisOscuro bg-transparent flex justify-between items-center font-sans w-32 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortValue}
        <span className="text-xs">▼</span>
      </div>

      {isOpen && (
        <div className="absolute top-52 left-24 mt-1 w-32 bg-white border rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`p-2 cursor-pointer hover:bg-blue-100 ${
                sortValue === option ? 'bg-[#EFF7FF] text-black' : 'text-gray-700'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBy;