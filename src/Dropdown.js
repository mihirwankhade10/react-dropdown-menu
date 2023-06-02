import React, { useState } from 'react';
import './Dropdown.css';


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
    // Do something with the selected item
    console.log(item);
  };

  return (
    <div className="dropdown" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
      <button className="dropdown-toggle">
        Select an option
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
