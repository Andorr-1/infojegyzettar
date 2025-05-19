import React, { useState } from 'react';

const Grade11 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">11. osztályos Informatika</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Üdvözöljük a 11. osztályos informatika tananyagban! Ez a kurzus a React 
            programozás alapjait és a modern frontend fejlesztést mutatja be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tananyag</h3>
              <p className="text-gray-600">
                React alapok, komponensek, props és state kezelés.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feladatok</h3>
              <p className="text-gray-600">
                React alkalmazások fejlesztése és komponensek készítése.
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
            <h3 className="text-2xl font-bold mb-4">React alapok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. React bevezetés</h4>
                <p className="text-gray-700 mb-4">
                  A React egy JavaScript könyvtár a felhasználói felületek építéséhez.
                  Komponens alapú architektúrát használ, amely lehetővé teszi a kód újrafelhasználását.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Egyszerű React komponens
import React from 'react';

function Udvozles(props) {
  return <h1>Üdvözöljük, {props.nev}!</h1>;
}

// Komponens használata
<Udvozles nev="János" />`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Props és State</h4>
                <p className="text-gray-700 mb-4">
                  A props a komponensek közötti adatátadásra szolgál, míg a state a komponens belső állapotát kezeli.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Props használata
function Szemely(props) {
  return (
    <div>
      <h2>{props.nev}</h2>
      <p>Életkor: {props.eletkor}</p>
    </div>
  );
}

// State használata
function Szamlalo() {
  const [szam, setSzam] = useState(0);

  return (
    <div>
      <p>Szám: {szam}</p>
      <button onClick={() => setSzam(szam + 1)}>
        Növelés
      </button>
    </div>
  );
}`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Eseménykezelés</h4>
                <p className="text-gray-700 mb-4">
                  A React-ben az eseményeket függvényekkel kezeljük, amelyek a felhasználói interakciókra reagálnak.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`function GombKomponens() {
  function kezelKattintas() {
    alert('A gombra kattintottál!');
  }

  return (
    <button onClick={kezelKattintas}>
      Kattints ide!
    </button>
  );
}

// Form eseménykezelés
function FormKomponens() {
  const [ertek, setErtek] = useState('');

  function kezelValtozas(event) {
    setErtek(event.target.value);
  }

  function kezelKuldes(event) {
    event.preventDefault();
    console.log('Küldött érték:', ertek);
  }

  return (
    <form onSubmit={kezelKuldes}>
      <input
        type="text"
        value={ertek}
        onChange={kezelValtozas}
      />
      <button type="submit">Küldés</button>
    </form>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Adatmodellezés</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Adatmodellek létrehozása</h4>
                <p className="text-gray-700 mb-4">
                  Az adatmodellek segítenek a struktúrálatlan adatok szervezésében. Egy adatmodell osztály 
                  definiálja az adatok struktúráját és a hozzájuk tartozó műveleteket.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Példa adatmodell osztály
public class Dron
{
    // Tulajdonságok (Properties)
    public string DroneNeve { get; set; }
    public string Tipus { get; set; }
    public int GyartasiEv { get; set; }
    public int MaxSebesseg { get; set; }
    public int AkkumulatorKapacitas { get; set; }
    public int RepulesiIdo { get; set; }
}

// Példa használat
var ujDron = new Dron
{
    DroneNeve = "DroneScout D4",
    Tipus = "Fotogrammetriai",
    GyartasiEv = 2020,
    MaxSebesseg = 88,
    AkkumulatorKapacitas = 5878,
    RepulesiIdo = 26
};`}
                </pre>
                <p className="text-gray-700 mb-4">
                  Az adatmodell osztályok a következő előnyökkel járnak:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Adatok strukturált tárolása</li>
                  <li>Típusbiztonság</li>
                  <li>Könnyű adatkezelés és validáció</li>
                  <li>Újrafelhasználhatóság</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Adatmodellek használata</h4>
                <p className="text-gray-700 mb-4">
                  Az adatmodelleket gyakran használjuk adatbázis műveletekhez, API kommunikációhoz 
                  vagy egyszerű adattároláshoz. Például egy lista vagy tömb segítségével több objektumot 
                  is kezelhetünk.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Drónok listája
List<Dron> dronok = new List<Dron>();

// Új drón hozzáadása
dronok.Add(new Dron 
{
    DroneNeve = "DroneScout D4",
    Tipus = "Fotogrammetriai",
    GyartasiEv = 2020,
    MaxSebesseg = 88,
    AkkumulatorKapacitas = 5878,
    RepulesiIdo = 26
});

// Drónok szűrése típus szerint
var fotogrammetriaiDronok = dronok.Where(d => d.Tipus == "Fotogrammetriai");

// Drónok rendezése sebesség szerint
var rendezettDronok = dronok.OrderByDescending(d => d.MaxSebesseg);`}
                </pre>
                <p className="text-gray-700 mb-4">
                  Az adatmodellek használatakor fontos figyelni:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>A tulajdonságok megfelelő típusának kiválasztására</li>
                  <li>Az adatok validációjára</li>
                  <li>Az adatok biztonságos kezelésére</li>
                  <li>A kód újrafelhasználhatóságára</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">React Feladatok</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Todo alkalmazás</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű Todo alkalmazást, amely tartalmaz:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Új feladat hozzáadását</li>
                  <li>Feladatok listázását</li>
                  <li>Feladatok törlését</li>
                  <li>Feladatok befejezésének jelölését</li>
                </ul>
                <p className="text-gray-700">
                  Használj state-et a feladatok kezeléséhez, és props-ot a komponensek közötti adatátadáshoz.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">React Megoldások</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Todo alkalmazás megoldása</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`import React, { useState } from 'react';

// Todo komponens
function Todo({ todo, onDelete, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <input
        type="checkbox"
        checked={todo.befejezve}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ 
        marginLeft: '10px',
        textDecoration: todo.befejezve ? 'line-through' : 'none'
      }}>
        {todo.szoveg}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: '10px' }}
      >
        Törlés
      </button>
    </div>
  );
}

// TodoList komponens
function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

// Fő alkalmazás komponens
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const ujTodo = {
      id: Date.now(),
      szoveg: input,
      befejezve: false
    };

    setTodos([...todos, ujTodo]);
    setInput('');
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, befejezve: !todo.befejezve } : todo
    ));
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo Alkalmazás</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Új feladat..."
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Hozzáadás</button>
      </form>

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default TodoApp;`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Grade11; 