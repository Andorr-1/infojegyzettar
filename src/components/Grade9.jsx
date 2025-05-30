import React from 'react';
import './styles.css';

const Grade9 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">9. Osztály Tananyag</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Programozás alapok */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Programozás Alapok</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. Algoritmusok</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Algoritmus fogalma és jellemzői</li>
                <li>Folyamatábrák készítése</li>
                <li>Alapvető algoritmusok</li>
                <li>Változók és adattípusok</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-2">2. JavaScript Alapok</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Változók és adattípusok</li>
                <li>Feltételes utasítások</li>
                <li>Ciklusok</li>
                <li>Függvények</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Gyakorlati feladatok */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Gyakorlati Feladatok</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. Algoritmus Feladatok</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Számok összege</p>
                <pre className="bg-gray-100 p-2 rounded">
                  {`// Írj programot, ami összeadja az első 10 számot!
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);`}
                </pre>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-2">2. JavaScript Gyakorlatok</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Számok átlaga</p>
                <pre className="bg-gray-100 p-2 rounded">
                  {`// Számold ki egy tömb elemeinek átlagát!
function atlag(szamok) {
    let sum = 0;
    for(let szam of szamok) {
        sum += szam;
    }
    return sum / szamok.length;
}`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Értékelési információk */}
      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Értékelési Információk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Röpdolgozatok</h3>
            <p>Heti 1 alkalom</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Nagyobb feladatok</h3>
            <p>2 hetente 1 alkalom</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Minimum követelmények</h3>
            <p>50% teljesítmény</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade9; 