import React, { useState } from 'react';

const Grade9 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">9. osztályos Informatika</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Üdvözöljük a 9. osztályos informatika tananyagban! Ez a kurzus az informatika alapjait 
            és a programozás kezdő lépéseit mutatja be, gyakorlati példákon keresztül.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tananyag</h3>
              <p className="text-gray-600">
                Alapvető informatika és programozás fogalmak, HTML és CSS alapok.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feladatok</h3>
              <p className="text-gray-600">
                Egyszerű gyakorlati feladatok a tanultak begyakorlásához.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Megoldások</h3>
              <p className="text-gray-600">
                Részletes megoldások és magyarázatok a feladatokhoz.
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <section>
            <h3 className="text-2xl font-bold mb-4">HTML és CSS alapok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. HTML alapok</h4>
                <p className="text-gray-700 mb-4">
                  A HTML (HyperText Markup Language) a weboldalak alapvető építőeleme. 
                  A HTML segítségével strukturáljuk a weboldal tartalmát.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<!DOCTYPE html>
<html>
<head>
    <title>Első weboldalam</title>
</head>
<body>
    <h1>Üdvözöljük!</h1>
    <p>Ez az első weboldalam.</p>
</body>
</html>`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. CSS alapok</h4>
                <p className="text-gray-700 mb-4">
                  A CSS (Cascading Style Sheets) a weboldalak stílusozására szolgál. 
                  A CSS segítségével formázzuk a HTML elemeket.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    line-height: 1.6;
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">HTML és CSS Feladatok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Egyszerű weboldal készítése</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű weboldalt, amely tartalmaz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Fejlécet (header) a weboldal címével</li>
                  <li>Navigációs menüt</li>
                  <li>Tartalom szekciót</li>
                  <li>Láblécet (footer)</li>
                </ul>
                <p className="text-gray-700">
                  A weboldalt stílusozd CSS-sel, használj különböző színeket, betűtípusokat és margókat.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">HTML és CSS Megoldások</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Egyszerű weboldal megoldása</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<!DOCTYPE html>
<html>
<head>
    <title>Egyszerű weboldal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        nav {
            background-color: #f4f4f4;
            padding: 1rem;
        }

        nav a {
            color: #333;
            text-decoration: none;
            margin-right: 1rem;
        }

        main {
            padding: 2rem;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Weboldal címe</h1>
    </header>

    <nav>
        <a href="#">Főoldal</a>
        <a href="#">Rólunk</a>
        <a href="#">Kapcsolat</a>
    </nav>

    <main>
        <h2>Üdvözöljük!</h2>
        <p>Ez egy egyszerű weboldal példa.</p>
    </main>

    <footer>
        <p>&copy; 2024 Minden jog fenntartva.</p>
    </footer>
</body>
</html>`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Grade9; 