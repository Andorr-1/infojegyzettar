import React from 'react';
import Grade9 from '../GradeContent/Grade9';
import Grade10 from '../GradeContent/Grade10';
import Grade11 from '../GradeContent/Grade11';
import Grade12 from '../GradeContent/Grade12';
import Grade13 from '../GradeContent/Grade13';
import AgazatiVizsga from '../GradeContent/AgazatiVizsga';
import SzakmaiVizsga from '../GradeContent/SzakmaiVizsga';

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
    '11. osztály programozás': {
      title: '11. osztály programozás',
      content: <Grade11 />
    },
    '12. osztály programozás': {
      title: '12. osztály programozás',
      content: <Grade12 />
    },
    '13. osztály programozás': {
      title: '13. osztály programozás',
      content: <Grade13 />
    },
    'Ágazati vizsga felkészítő tananyag': {
      title: 'Ágazati vizsga felkészítő tananyag',
      content: <AgazatiVizsga />
    },
    'Szakmai vizsga tananyag': {
      title: 'Szakmai vizsga tananyag',
      content: <SzakmaiVizsga />
    }
  };

  return (
    <div className="flex-1 p-10 bg-gray-50">
      {selectedItem ? (
        <div className="bg-white rounded-lg shadow-md p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-primary mb-6 pb-4 border-b-2 border-secondary">
            {contentMap[selectedItem].title}
          </h2>
          <div className="text-accent text-lg leading-relaxed">
            {contentMap[selectedItem].content}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Üdvözöljük az Infojegyzettár oldalon!
          </h2>
          <p className="text-xl text-gray-600">
            Válasszon a bal oldali menüből a kívánt tananyagot.
          </p>
        </div>
      )}
    </div>
  );
};

export default Content; 