import React, { useState } from 'react';

const SzakkepzesiElokeszito = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">Szakképzési Előkészítő</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Üdvözöljük a szakképzési előkészítő tananyagban! Ez a kurzus az alapvető 
            web fejlesztési ismereteket mutatja be, kezdve az HTML és CSS alapoktól.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tananyag</h3>
              <p className="text-gray-600">
                HTML és CSS alapok, weboldal struktúra, stílusok.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feladatok</h3>
              <p className="text-gray-600">
                Gyakorlati feladatok a tanultak begyakorlásához.
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
            <h3 className="text-2xl font-bold mb-4">HTML alapok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. HTML dokumentum struktúra</h4>
                <p className="text-gray-700 mb-4">
                  Az HTML dokumentum alapvető struktúrája és a legfontosabb elemek.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oldal címe</title>
</head>
<body>
    <h1>Első szintű fejléc</h1>
    <p>Bekezdés szövege</p>
</body>
</html>`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Szövegelemek</h4>
                <p className="text-gray-700 mb-4">
                  A leggyakrabban használt szövegelemek és formázási lehetőségek.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<h1>Első szintű fejléc</h1>
<h2>Második szintű fejléc</h2>
<p>Bekezdés szövege</p>
<strong>Félkövér szöveg</strong>
<em>Dőlt szöveg</em>
<u>Aláhúzott szöveg</u>
<br>Sortörés
<hr>Vízszintes vonal`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Listák</h4>
                <p className="text-gray-700 mb-4">
                  Rendezett és rendezetlen listák létrehozása.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<!-- Rendezetlen lista -->
<ul>
    <li>Első elem</li>
    <li>Második elem</li>
    <li>Harmadik elem</li>
</ul>

<!-- Rendezett lista -->
<ol>
    <li>Első elem</li>
    <li>Második elem</li>
    <li>Harmadik elem</li>
</ol>`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">CSS alapok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. CSS bevezetés</h4>
                <p className="text-gray-700 mb-4">
                  A CSS (Cascading Style Sheets) a weboldalak megjelenésének formázására szolgál.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`/* CSS szabályok */
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin: 10px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Színek és betűtípusok</h4>
                <p className="text-gray-700 mb-4">
                  Színek és betűtípusok használata CSS-ben.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`/* Színek */
.szoveg {
    color: red;              /* Névvel */
    color: #ff0000;         /* Hexadecimálisan */
    color: rgb(255,0,0);    /* RGB */
    color: rgba(255,0,0,0.5); /* RGBA (átlátszósággal) */
}

/* Betűtípusok */
.szoveg {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    text-decoration: underline;
}`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Box modell</h4>
                <p className="text-gray-700 mb-4">
                  A box modell a HTML elemek elrendezésének alapja.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`/* Box modell */
.doboz {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f0f0f0;
}

/* Margin összeomlás */
.egymas-mellett {
    margin: 20px;
    display: inline-block;
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
                <h4 className="text-xl font-semibold mb-4">1. Egyszerű weboldal</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű weboldalt, amely tartalmaz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Fejlécet a weboldal címével</li>
                  <li>Navigációs menüt</li>
                  <li>Több bekezdést szöveggel</li>
                  <li>Képet</li>
                  <li>Láblécet</li>
                </ul>
                <p className="text-gray-700">
                  Formázd az oldalt CSS segítségével:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Használj különböző színeket</li>
                  <li>Állíts be betűtípusokat</li>
                  <li>Add meg a margókat és a padding-ot</li>
                  <li>Készíts reszponzív elrendezést</li>
                </ul>
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
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Egyszerű weboldal</title>
    <style>
        /* Alap stílusok */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Fejléc */
        header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 1rem;
        }

        /* Navigáció */
        nav {
            background-color: #333;
            padding: 1rem;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
        }

        nav a:hover {
            color: #4CAF50;
        }

        /* Fő tartalom */
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }

        .tartalom {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
        }

        .szoveg {
            margin-bottom: 1rem;
        }

        .kep {
            width: 100%;
            max-width: 400px;
            border-radius: 5px;
        }

        /* Lábléc */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }

        /* Reszponzív design */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }

            .tartalom {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Weboldal címe</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#fooldal">Főoldal</a></li>
            <li><a href="#rolunk">Rólunk</a></li>
            <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
            <li><a href="#kapcsolat">Kapcsolat</a></li>
        </ul>
    </nav>

    <main>
        <div class="tartalom">
            <div class="bal">
                <h2>Üdvözöljük!</h2>
                <p class="szoveg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p class="szoveg">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="jobb">
                <img src="kep.jpg" alt="Példa kép" class="kep">
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Minden jog fenntartva</p>
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

export default SzakkepzesiElokeszito; 