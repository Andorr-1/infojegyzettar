import React, { useState } from 'react';

const Grade10 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">10. osztályos Informatika</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Üdvözöljük a 10. osztályos informatika tananyagban! Ez a kurzus a JavaScript 
            programozás alapjait és a web fejlesztés további lépéseit mutatja be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tananyag</h3>
              <p className="text-gray-600">
                JavaScript alapok, DOM manipuláció, eseménykezelés.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feladatok</h3>
              <p className="text-gray-600">
                Interaktív weboldalak készítése JavaScript segítségével.
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
            <h3 className="text-2xl font-bold mb-4">JavaScript alapok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. JavaScript bevezetés</h4>
                <p className="text-gray-700 mb-4">
                  A JavaScript egy programozási nyelv, amely a weboldalak interaktívvá tételére szolgál.
                  A JavaScript kód a böngészőben fut, és lehetővé teszi a weboldal dinamikus módosítását.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// JavaScript kód beágyazása HTML-be
<script>
    // Változók létrehozása
    let nev = "János";
    const eletkor = 16;
    
    // Függvény definíció
    function udvozol(nev) {
        return "Üdvözöljük, " + nev + "!";
    }
    
    // Függvény hívása
    console.log(udvozol(nev));
</script>`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. DOM manipuláció</h4>
                <p className="text-gray-700 mb-4">
                  A DOM (Document Object Model) a weboldal struktúráját reprezentálja.
                  JavaScript segítségével módosíthatjuk a DOM elemeit.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// HTML elem kiválasztása
const fejlec = document.querySelector('h1');

// Elem tartalmának módosítása
fejlec.textContent = "Új cím";

// Új elem létrehozása
const ujParagrafus = document.createElement('p');
ujParagrafus.textContent = "Ez egy új bekezdés";

// Elem hozzáadása a DOM-hoz
document.body.appendChild(ujParagrafus);`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Eseménykezelés</h4>
                <p className="text-gray-700 mb-4">
                  Az eseménykezelés lehetővé teszi a felhasználói interakciók kezelését.
                  Például gombkattintás, egér mozgatás, billentyűleütés eseményeket kezelhetünk.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// HTML
<button id="gomb">Kattints ide!</button>

// JavaScript
const gomb = document.getElementById('gomb');

gomb.addEventListener('click', function() {
    alert('A gombra kattintottál!');
});

// Egér mozgatás esemény
document.addEventListener('mousemove', function(event) {
    console.log('Egér pozíció:', event.clientX, event.clientY);
});`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">JavaScript Feladatok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Számláló alkalmazás</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű számláló alkalmazást, amely tartalmaz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Egy számot megjelenítő elem</li>
                  <li>Növelő és csökkentő gombokat</li>
                  <li>Nullázó gombot</li>
                </ul>
                <p className="text-gray-700">
                  A számláló értékét JavaScript segítségével módosítsd, és a DOM-ot használd a megjelenítéshez.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">JavaScript Megoldások</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Számláló alkalmazás megoldása</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`<!DOCTYPE html>
<html>
<head>
    <title>Számláló</title>
    <style>
        .container {
            text-align: center;
            margin-top: 50px;
        }
        .szam {
            font-size: 48px;
            margin: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 18px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Számláló</h1>
        <div class="szam" id="szam">0</div>
        <button onclick="csokkent()">-</button>
        <button onclick="nullaz()">0</button>
        <button onclick="novel()">+</button>
    </div>

    <script>
        let szam = 0;
        const szamElem = document.getElementById('szam');

        function novel() {
            szam++;
            frissit();
        }

        function csokkent() {
            szam--;
            frissit();
        }

        function nullaz() {
            szam = 0;
            frissit();
        }

        function frissit() {
            szamElem.textContent = szam;
        }
    </script>
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

export default Grade10; 