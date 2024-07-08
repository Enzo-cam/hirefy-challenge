"use client";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  onSortChange: (value: string) => void;
}

const SortBy = ({ onSortChange }: Props) => {
  const [sortValue, setSortValue] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = ["All", "Feat", "Fix"];

  const handleOptionClick = (value: string) => {
    setSortValue(value);
    onSortChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center relative" ref={dropdownRef}>
      <p className="mr-2 font-sans text-grisOscuro">Sort by:</p>
      <div className="relative inline-block">
        <div 
          className="p-2 border rounded-full text-grisOscuro bg-transparent flex justify-between items-center font-sans w-32 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {sortValue}
          <span className="text-xs">▼</span>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg z-10">
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
    </div>
  );
};

export default SortBy;