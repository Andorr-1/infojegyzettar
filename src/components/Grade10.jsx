import React from 'react';
import './styles.css';

const Grade10 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">10. Osztály Tananyag</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Webfejlesztés */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Webfejlesztés</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. HTML5 és CSS3</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Modern HTML5 elemek</li>
                <li>CSS Grid és Flexbox</li>
                <li>Reszponzív design</li>
                <li>CSS animációk</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-2">2. JavaScript Haladó</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Objektum-orientált programozás</li>
                <li>Aszinkron programozás</li>
                <li>DOM manipuláció</li>
                <li>Event handling</li>
              </ul>
            </section>
          </div>
        </div>

        {/* Gyakorlati feladatok */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Gyakorlati Feladatok</h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-xl font-medium mb-2">1. Weboldal Készítés</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Reszponzív weboldal</p>
                <pre className="bg-gray-100 p-2 rounded">
                  {`/* CSS Grid példa */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}`}
                </pre>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-2">2. JavaScript Projekt</h3>
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2">Feladat: Todo alkalmazás</p>
                <pre className="bg-gray-100 p-2 rounded">
                  {`class TodoApp {
    constructor() {
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
    }
}`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Projekt feladatok */}
      <div className="mt-8 bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Projekt Feladatok</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">1. Projekt</h3>
            <p>Reszponzív weboldal készítése</p>
            <p className="text-sm text-gray-600 mt-2">Határidő: 2 hét</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">2. Projekt</h3>
            <p>JavaScript alkalmazás fejlesztése</p>
            <p className="text-sm text-gray-600 mt-2">Határidő: 3 hét</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">3. Projekt</h3>
            <p>Full-stack webalkalmazás</p>
            <p className="text-sm text-gray-600 mt-2">Határidő: 4 hét</p>
          </div>
        </div>
      </div>

      {/* Értékelési információk */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Értékelési Információk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Projektek</h3>
            <p>40%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Röpdolgozatok</h3>
            <p>30%</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Gyakorlati feladatok</h3>
            <p>30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade10; 