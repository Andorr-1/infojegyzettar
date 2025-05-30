import React from 'react';

const Sidebar = ({ menuItems, selectedItem, onSelectItem }) => {
  // Define the items that have content
  const availableItems = [
    '9. osztály programozás',
    '10. osztály programozás',
    'Ágazati vizsga felkészítő tananyag'
  ];

  // Filter menuItems to only show available items
  const filteredMenuItems = menuItems.filter(item => availableItems.includes(item));

  return (
    <div className="w-72 bg-gray-800 text-white p-5 shadow-lg">
      <div className="py-5 border-b border-gray-700 mb-5">
        <h1 className="text-2xl font-bold">Infojegyzettár</h1>
      </div>
      <nav>
        <ul className="space-y-2.5">
          {filteredMenuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectItem(item);
                }}
                className={`block p-2.5 rounded transition-all duration-300 hover:bg-gray-700 ${
                  selectedItem === item ? 'bg-gray-600 font-bold' : ''
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