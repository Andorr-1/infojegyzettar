import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    '9. osztály programozás',
    '10. osztály programozás',
    '11. osztály programozás',
    '12. osztály programozás',
    '13. osztály programozás',
    'Ágazati vizsga felkészítő tananyag',
    'Szakmai vizsga tananyag'
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        menuItems={menuItems}
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
      />
      <Content selectedItem={selectedItem} />
    </div>
  );
}

export default App;
