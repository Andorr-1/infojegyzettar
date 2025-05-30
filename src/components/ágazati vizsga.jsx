import React from 'react';
import './styles.css';

const AgazatiVizsga = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Ágazati Vizsga</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Elméleti rész */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Elméleti Tudásanyag</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. Számítógépes Hálózatok</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hálózati topológiák</li>
                <li>OSI modell</li>
                <li>TCP/IP protokoll</li>
                <li>Hálózati eszközök</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-2">2. Operációs Rendszerek</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Windows és Linux alapok</li>
                <li>Rendszerfelügyelet</li>
                <li>Felhasználói jogosultságok</li>
                <li>Rendszerbiztonság</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Gyakorlati rész */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Gyakorlati Feladatok</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. Hálózati Konfiguráció</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Konfigurálj egy egyszerű hálózatot</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP címek beállítása</li>
                  <li>Alhálózatok létrehozása</li>
                  <li>Kapcsolók konfigurálása</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-2">2. Rendszerfelügyelet</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Windows/Linux rendszer kezelése</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Felhasználók kezelése</li>
                  <li>Szolgáltatások konfigurálása</li>
                  <li>Biztonsági beállítások</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Vizsga információk */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Vizsga Információk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Időtartam</h3>
            <p>180 perc</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Minimum pontszám</h3>
            <p>60%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Szükséges eszközök</h3>
            <p>Számítógép, hálózati eszközök</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgazatiVizsga; 