"use client";
import React, { useState } from "react";
type FilterNavbarProps = {
  items: string[]; // Array of strings for filter options
  onFilterChange: (filter: string) => void; // Function that takes a string
};

const FilterNavbar: React.FC<FilterNavbarProps> = ({
  items,
  onFilterChange,
}) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-navbar">
      <button
        className={`filter-button ${activeFilter === "All" ? "active" : ""}`}
        onClick={() => handleFilterClick("All")}
      >
        All
      </button>
      {items.map((item) => (
        <button
          key={item}
          className={`filter-button ${activeFilter === item ? "active" : ""}`}
          onClick={() => handleFilterClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterNavbar;
