import React from 'react';

const Sidebar = ({ menuItems, selectedItem, onSelectItem }) => {
  return (
    <div className="w-72 bg-primary text-white p-5 shadow-lg">
      <div className="py-5 border-b border-white/10 mb-5">
        <h1 className="text-2xl font-bold">info.fejlessz.hu</h1>
      </div>
      <nav>
        <ul className="space-y-2.5">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectItem(item);
                }}
                className={`block p-2.5 rounded transition-all duration-300 hover:bg-accent ${
                  selectedItem === item ? 'bg-secondary font-bold' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 