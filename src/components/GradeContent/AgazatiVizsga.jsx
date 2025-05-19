import React, { useState } from 'react';

const AgazatiVizsga = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <div className="flex space-x-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('tananyag')}
          className={`pb-2 px-4 ${
            activeTab === 'tananyag'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Tananyag
        </button>
        <button
          onClick={() => setActiveTab('feladatok')}
          className={`pb-2 px-4 ${
            activeTab === 'feladatok'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Feladatok
        </button>
        <button
          onClick={() => setActiveTab('megoldasok')}
          className={`pb-2 px-4 ${
            activeTab === 'megoldasok'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Megoldások
        </button>
      </div>

      {activeTab === 'tananyag' && (
        <div className="space-y-8">
          {/* Itt lesz az ágazati vizsga tananyaga */}
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          {/* Itt lesznek az ágazati vizsga feladatai */}
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          {/* Itt lesznek az ágazati vizsga megoldásai */}
        </div>
      )}
    </div>
  );
};

export default AgazatiVizsga; 