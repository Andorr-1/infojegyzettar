import React from 'react';
import Grade9 from '../Grade9';
import Grade10 from '../Grade10';
import AgazatiVizsga from '../ágazati vizsga';

const Content = ({ selectedItem }) => {
  const contentMap = {
    '9. osztály programozás': {
      title: '9. osztály programozás',
      content: <Grade9 />
    },
    '10. osztály programozás': {
      title: '10. osztály programozás',
      content: <Grade10 />
    },
    'Ágazati vizsga felkészítő tananyag': {
      title: 'Ágazati vizsga felkészítő tananyag',
      content: <AgazatiVizsga />
    }
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
      {selectedItem ? (
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-gray-200">
            {contentMap[selectedItem].title}
          </h2>
          <div className="text-gray-700">
            {contentMap[selectedItem].content}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Üdvözöljük az Infojegyzettár oldalon!
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-4">
              Válassz a bal oldali menüből a tananyagok közül:
            </p>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>• 9. osztály programozás</li>
              <li>• 10. osztály programozás</li>
              <li>• Ágazati vizsga felkészítő tananyag</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content; 