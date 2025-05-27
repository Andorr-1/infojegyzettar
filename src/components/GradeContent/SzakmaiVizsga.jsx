import React, { useState } from 'react';

const SzakmaiVizsga = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div>
      <div className="flex space-x-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('frontend')}
          className={`pb-2 px-4 ${
            activeTab === 'frontend'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveTab('backend')}
          className={`pb-2 px-4 ${
            activeTab === 'backend'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setActiveTab('sql')}
          className={`pb-2 px-4 ${
            activeTab === 'sql'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          SQL
        </button>
      </div>

      {activeTab === 'frontend' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">React Komponensek</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                A React komponensek a felhasználói felület építőelemei. Minden komponens egy önálló, újrafelhasználható kódrészlet, 
                amely a saját állapotával és megjelenésével rendelkezik. A komponensek között adatokat props-okon keresztül tudunk átadni.
              </p>
              <p className="text-gray-700 mb-4">
                A példában látható Header komponens egy egyszerű fejlécet jelenít meg, amely a props-okon keresztül kapott címet jeleníti meg.
                A komponens használatához importálnunk kell, majd props-okkal átadhatjuk a szükséges adatokat.
              </p>
              <p>Header komponens létrehozása:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// Header.jsx
import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-red-800 text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;

// App.jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header title="Trolibusz hálózat" />
      {/* További komponensek */}
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">React Router</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                A React Router egy könyvtár, amely lehetővé teszi az oldalak közötti navigációt egy oldalas alkalmazásokban (SPA).
                A router segítségével különböző URL-ekhez különböző komponenseket tudunk rendelni, így a felhasználó számára úgy tűnik,
                mintha különböző oldalakon navigálna.
              </p>
              <p className="text-gray-700 mb-4">
                A példában látható kód bemutatja, hogyan lehet beállítani az alapvető routing-ot. A BrowserRouter komponens
                a teljes alkalmazást körülöleli, a Routes komponens pedig a különböző útvonalakat definiálja. Minden Route
                egy path-hoz és egy komponenshez kapcsolódik.
              </p>
              <p>Navigáció és útvonalak kezelése:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Jaratok from './components/Jaratok';
import UjJarat from './components/UjJarat';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jaratok" element={<Jaratok />} />
        <Route path="/ujjarat" element={<UjJarat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Adatok Kezelése</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                A React alkalmazásokban gyakran szükségünk van külső adatok lekérdezésére és megjelenítésére. Ehhez használhatjuk
                a useState és useEffect hook-okat. A useState segítségével tároljuk az adatokat, míg a useEffect segítségével
                oldjuk meg az adatok lekérdezését és a komponens életciklusának kezelését.
              </p>
              <p className="text-gray-700 mb-4">
                A példában látható kód bemutatja, hogyan lehet adatokat lekérdezni egy API-ból és megjeleníteni a felhasználói
                felületen. A Jaratok komponens lekéri a járatok listáját, majd a JaratCard komponens segítségével jeleníti meg
                azokat egy kártya-alapú elrendezésben.
              </p>
              <p>Járatok lekérdezése és megjelenítése:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// Jaratok.jsx
import { useState, useEffect } from 'react';
import JaratCard from './JaratCard';

const Jaratok = () => {
  const [jaratok, setJaratok] = useState([]);

  useEffect(() => {
    const fetchJaratok = async () => {
      try {
        const response = await fetch('http://localhost:8000/jaratok');
        const data = await response.json();
        setJaratok(data);
      } catch (error) {
        console.error('Hiba:', error);
      }
    };

    fetchJaratok();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Jelenlegi járatok</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jaratok.map(jarat => (
          <JaratCard key={jarat.id} jarat={jarat} />
        ))}
      </div>
    </div>
  );
};

// JaratCard.jsx
const JaratCard = ({ jarat }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Járat {jarat.jaratSzam}</h2>
      <p>Típus: {jarat.jaratTipus === 'T' ? 'Trolibusz' : 'Metró'}</p>
      <p>Első ajtós: {jarat.elsoAjtos === 1 ? 'Igen' : 'Nem'}</p>
    </div>
  );
};`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Űrlapok Kezelése</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Az űrlapok kezelése egy fontos része a React alkalmazásoknak. Az űrlapok segítségével tudunk adatokat bekérni
                a felhasználótól és elküldeni a szervernek. A React-ben az űrlapok kezeléséhez használhatjuk a kontrollált komponenseket,
                ahol a React állapota a "single source of truth".
              </p>
              <p className="text-gray-700 mb-4">
                A példában látható kód bemutatja, hogyan lehet létrehozni egy űrlapot új járat felviteléhez. Az űrlap adatait
                a useState hook segítségével kezeljük, és a form beküldésekor elküldjük a szervernek. A useNavigate hook
                segítségével navigálhatunk a sikeres mentés után.
              </p>
              <p>Új járat felvitele:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// UjJarat.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UjJarat = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    jaratSzam: '',
    jaratTipus: 'T',
    elsoAjtos: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/jarat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate('/');
      }
    } catch (error) {
      console.error('Hiba:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">ID:</label>
        <input
          type="number"
          value={formData.id}
          onChange={(e) => setFormData({...formData, id: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Járat szám:</label>
        <input
          type="text"
          value={formData.jaratSzam}
          onChange={(e) => setFormData({...formData, jaratSzam: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Járat típus:</label>
        <select
          value={formData.jaratTipus}
          onChange={(e) => setFormData({...formData, jaratTipus: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="T">Trolibusz</option>
          <option value="M">Metró</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Első ajtós:</label>
        <select
          value={formData.elsoAjtos}
          onChange={(e) => setFormData({...formData, elsoAjtos: parseInt(e.target.value)})}
          className="w-full p-2 border rounded"
        >
          <option value="0">Nem</option>
          <option value="1">Igen</option>
        </select>
      </div>
      <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded">
        Mentés
      </button>
    </form>
  );
};`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Frontend Fejlesztés React-tel</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Környezeti változók használata1</h4>
                <p className="text-gray-700 mb-4">
                  A backend API URL-jének környezeti változóban való tárolása biztonságos és karbantartható megoldás.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// .env fájl létrehozása a projekt gyökérkönyvtárában
VITE_API_URL=http://localhost:8000

// API hívások a komponensekben
const API_URL = import.meta.env.VITE_API_URL;

// Példa API hívás
const fetchStudents = async () => {
  try {
    const response = await fetch(\`\${API_URL}/tanulok\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hiba a tanulók lekérdezésekor:', error);
    throw error;
  }
};`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Komponensek létrehozása3-4-5</h4>
                <p className="text-gray-700 mb-4">
                  A React komponensek moduláris építőelemek, amelyek újrafelhasználhatók és könnyen karbantarthatók.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Tanulok.jsx
import React from 'react';
import Student from '../assets/student.svg';

const Tanulok = () => {
  return (
    <div>
      <h2>Tanulók</h2>
      <img src={Student} alt="Student" />
    </div>
  );
};

export default Tanulok;

import React from 'react';

const TanuloForm = () => {
  return (
    <div>
      <h2>Új tanuló felvitele</h2>
    </div>
  );
};

export default TanuloForm;

// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../assets/books.png';

const Menu = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Books} alt="Books" className="h-8" />
        <div className="space-x-4">
          <Link to="/tanulok" className="text-white hover:text-gray-200">
            Tanulók
          </Link>
          <Link to="/tanuloform" className="text-white hover:text-gray-200">
            Új tanuló
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Routing és Navigáció5</h4>
                <p className="text-gray-700 mb-4">
                  A React Router segítségével oldalankénti navigációt valósíthatunk meg.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={< />} />
        <Route path="/" element={< />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">4. Adatok kezelése és megjelenítése6</h4>
                <p className="text-gray-700 mb-4">
                  A komponensekben az adatokat state-ben tároljuk és API hívásokkal kezeljük.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Tanulok.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Tanulok = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(\`\${API_URL}/tanulok\`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Hiba a tanulók lekérdezésekor:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(\`\${API_URL}/tanulo/id/\${id}\`, {
        method: 'DELETE'
      });
      navigate('/');
    } catch (error) {
      console.error('Hiba a törlés során:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map(student => (
          <TanuloCard
            key={student.oktazon}
            student={student}
            onDelete={handleDelete}
            image={Studying}
          />
        ))}
      </div>
    </div>
  );
};

export default Tanulok;

const TanuloCard = ({ student, onDelete, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={image} alt="Studying" className="w-full h-48 object-cover rounded" />
      <h3>{student.nev}</h3>
      <p>Oktatási azonosító: {student.oktazon}</p>
      <p>Hozott: {student.hozott}</p>
      <p>Központi: {student.kpmagy + student.kpmat}</p>
      <button
        onClick={() => onDelete(student.oktazon)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Törlés
      </button>
    </div>
  );
};`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">5. Űrlap kezelése8</h4>
                <p className="text-gray-700 mb-4">
                  Az űrlapok kezeléséhez state-et használunk és a form submit eseményt kezeljük.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// TanuloForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TanuloForm = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    adat: '',
    adat: '',
    adat: '',
    adat: '',
    adat: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(\`\${API_URL}/tanulo\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      navigate('/');
    } catch (error) {
      console.error('Hiba a tanuló felvitele során:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block mb-2">Oktatási azonosító:</label>
        <input
          type="text"
          name="oktazon"
          value={formData.oktazon}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Név:</label>
        <input
          type="text"
          name="nev"
          value={formData.nev}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Hozott pontszám:</label>
        <input
          type="number"
          name="hozott"
          value={formData.hozott}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Központi magyar:</label>
        <input
          type="number"
          name="kpmagy"
          value={formData.kpmagy}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Központi matek:</label>
        <input
          type="number"
          name="kpmat"
          value={formData.kpmat}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Mentés
      </button>
    </form>
  );
};

export default TanuloForm;`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'backend' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Zenei Portál Backend Feladat</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                A feladat egy zenei portál backend alkalmazásának létrehozása, amely a chinook.db SQLite adatbázist használja.
                Az alkalmazásnak több végpontot kell biztosítania az előadók és zeneszámok kezeléséhez.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-3">1. CORS használata</h4>
              <p className="text-gray-700 mb-4">
                A CORS (Cross-Origin Resource Sharing) engedélyezése szükséges a frontend alkalmazás számára:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`const cors = require('cors');
app.use(cors());`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">2. Port beállítása</h4>
              <p className="text-gray-700 mb-4">
                Az alkalmazás a 8000-es porton fut:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`const PORT = 8000;
app.listen(PORT, () => {
  console.log(\`Szerver fut a http://localhost:\${PORT} címen\`);
});`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">3. SQLite adatbázis használata</h4>
              <p className="text-gray-700 mb-4">
                A chinook.db adatbázis kapcsolat létrehozása:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`
                const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database("./adatbázis_neve.db");`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">4. Nodemon használata</h4>
              <p className="text-gray-700 mb-4">
                A package.json fájlban beállítjuk a start scriptet:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`{
  "scripts": {
    "start": "nodemon index.js"
  }
}`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">5. JSON formátumú üdvözlő végpont</h4>
              <p className="text-gray-700 mb-4">
                A gyökér végpont JSON formátumban küldi az üdvözlő üzenetet:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`app.get('/', (req, res) => {
  res.json({
    message: 'Üdvözöljük a Zenei Portál API-ban!',
    version: '1.0.0'
  });
});`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">6. Előadók lekérdezése</h4>
              <p className="text-gray-700 mb-4">
                Az /artists GET végpont lekéri az összes előadót:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`app.get('/artists', (req, res) => {
  db.all('SELECT * FROM artists', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Hiba az előadók lekérdezésekor' });
      return;
    }
    res.json(rows);
  });
});`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">7. Új előadó hozzáadása</h4>
              <p className="text-gray-700 mb-4">
                Az /artists POST végpont új előadót ad hozzá:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`app.post('/artists', (req, res) => {
  const { Name } = req.body;
  
  if (!Name) {
    res.status(400).json({ error: 'Az előadó neve kötelező' });
    return;
  }

  db.run('INSERT INTO artists (Name) VALUES (?)', [Name], function(err) {
    if (err) {
      res.status(500).json({ error: 'Hiba az előadó hozzáadásakor' });
      return;
    }
    res.status(201).json({
      message: 'Előadó sikeresen hozzáadva',
      artistId: this.lastID
    });
  });
});`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">8. Zeneszámok lekérdezése kategória alapján</h4>
              <p className="text-gray-700 mb-4">
                A /genre-tracks/:genreId végpont lekéri a kategóriához tartozó zeneszámokat:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`app.get('/genre-tracks/:genreId', (req, res) => {
  const { genreId } = req.params;

  const query = \`
    SELECT t.Name as TrackName, a.Name as ArtistName, g.Name as GenreName
    FROM tracks t
    JOIN albums al ON t.AlbumId = al.AlbumId
    JOIN artists a ON al.ArtistId = a.ArtistId
    JOIN genres g ON t.GenreId = g.GenreId
    WHERE g.GenreId = ?
  \`;

  db.all(query, [genreId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Hiba a zeneszámok lekérdezésekor' });
      return;
    }
    res.json(rows);
  });
});`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">9. Teszt gyűjtemény</h4>
              <p className="text-gray-700 mb-4">
                A Postman teszt gyűjtemény tartalmazza az összes végpont tesztjét:
              </p>
              <pre className="bg-gray-100 p-4 rounded">
                {`{
  "info": {
    "name": "music_backend_test",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Üdvözlő végpont teszt",
      "request": {
        "method": "GET",
        "url": "http://localhost:8000/"
      }
    },
    {
      "name": "Előadók lekérdezése",
      "request": {
        "method": "GET",
        "url": "http://localhost:8000/artists"
      }
    },
    {
      "name": "Új előadó hozzáadása",
      "request": {
        "method": "POST",
        "url": "http://localhost:8000/artists",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\\"Name\\": \\"Teszt Előadó\\"}"
        }
      }
    },
    {
      "name": "Zeneszámok lekérdezése kategória alapján",
      "request": {
        "method": "GET",
        "url": "http://localhost:8000/genre-tracks/1"
      }
    }
  ]
}`}
              </pre>

              <h4 className="text-xl font-semibold mt-6 mb-3">Telepítési útmutató</h4>
              <div className="bg-gray-100 p-4 rounded">
                <p className="mb-2">1. Csomagok telepítése:</p>
                <pre className="bg-gray-200 p-2 rounded">npm install express cors sqlite3
npm install nodemon --save-dev</pre>
                
                <p className="mt-4 mb-2">2. Adatbázis fájl másolása:</p>
                <p>- Másoljuk a chinook.db fájlt a projekt gyökérkönyvtárába</p>
                
                <p className="mt-4 mb-2">3. Alkalmazás indítása:</p>
                <pre className="bg-gray-200 p-2 rounded">npm start</pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'sql' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Adatbázis Táblák</h3>
            <div className="space-y-4">
              <p>Táblák létrehozása:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- Táblák létrehozása
CREATE TABLE jaratok (
    id INT PRIMARY KEY,
    jaratSzam VARCHAR(10) NOT NULL,
    jaratTipus CHAR(1) NOT NULL CHECK (jaratTipus IN ('T', 'M')),
    elsoAjtos TINYINT(1) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexek létrehozása
CREATE INDEX idx_jarat_szam ON jaratok(jaratSzam);
CREATE INDEX idx_jarat_tipus ON jaratok(jaratTipus);`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Adatok Kezelése</h3>
            <div className="space-y-4">
              <p>Adatok beszúrása és lekérdezése:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- Adatok beszúrása
INSERT INTO jaratok (id, jaratSzam, jaratTipus, elsoAjtos)
VALUES (1, '1', 'T', 1);

-- Adatok lekérdezése
SELECT 
    id,
    jaratSzam,
    CASE 
        WHEN jaratTipus = 'T' THEN 'Trolibusz'
        WHEN jaratTipus = 'M' THEN 'Metró'
    END as jaratTipus,
    CASE 
        WHEN elsoAjtos = 1 THEN 'Igen'
        ELSE 'Nem'
    END as elsoAjtos
FROM jaratok
ORDER BY jaratSzam;`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Összetett Lekérdezések</h3>
            <div className="space-y-4">
              <p>Statisztikák és csoportosítás:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- Járat típusok statisztikája
SELECT 
    jaratTipus,
    COUNT(*) as darab,
    SUM(CASE WHEN elsoAjtos = 1 THEN 1 ELSE 0 END) as elsoAjtosDarab
FROM jaratok
GROUP BY jaratTipus;

-- Járatok keresése
SELECT *
FROM jaratok
WHERE jaratSzam LIKE '%1%'
AND jaratTipus = 'T'
AND elsoAjtos = 1;`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Adatbázis Karbantartás</h3>
            <div className="space-y-4">
              <p>Biztonsági mentés és visszaállítás:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- Adatbázis mentése
mysqldump -u root -p jaratok_db > jaratok_backup.sql

-- Adatbázis visszaállítása
mysql -u root -p jaratok_db < jaratok_backup.sql

-- Tábla optimalizálása
OPTIMIZE TABLE jaratok;

-- Indexek újraépítése
REPAIR TABLE jaratok;`}
              </pre>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SzakmaiVizsga; 