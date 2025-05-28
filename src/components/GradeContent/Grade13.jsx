import React, { useState } from 'react';

const Grade13 = () => {
  const [activeTab, setActiveTab] = useState('tananyag');

  return (
    <div>
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">13.osztály vegyes</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Üdvözöljük az Infotárhely oldalon! Ez a platform a modern szoftverfejlesztés 
            alapjait és haladó témáit mutatja be, gyakorlati példákon keresztül. Itt megtalálhatod 
            a web fejlesztés, backend fejlesztés és asztali alkalmazások fejlesztésének legfontosabb 
            eszközeit és technológiáit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tananyag</h3>
              <p className="text-gray-600">
                Részletes elméleti anyagok, kód példák és magyarázatok a modern web fejlesztésről.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feladatok</h3>
              <p className="text-gray-600">
                Gyakorlati feladatok a tanultak begyakorlásához, különböző nehézségi szinten.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Megoldások</h3>
              <p className="text-gray-600">
                Részletes megoldások és magyarázatok a feladatokhoz, legjobb gyakorlatokkal.
              </p>
            </div>
            <div className="bg-base-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Asztali alkalmazások</h3>
              <p className="text-gray-600">
                Asztali alkalmazások fejlesztése Electron és React segítségével.
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
        <button
          onClick={() => setActiveTab('asztali')}
          className={`pb-2 px-4 ${
            activeTab === 'asztali'
              ? 'border-b-2 border-secondary text-secondary font-semibold'
              : 'text-gray-600 hover:text-primary'
          }`}
        >
          Asztali alkalmazások
        </button>
      </div>

      {activeTab === 'tananyag' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">React Komponensek és Hooks</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Card Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A Card komponens egy újrafelhasználható kártya komponens, amely egy ital adatait jeleníti meg.
                  A komponens props-okon keresztül kapja meg az adatokat, és Tailwind CSS osztályokat használ a stílusozáshoz.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`const Card = ({drink}) => {
    return (
        <div className="card bg-base-100 w-64 h-72 shadow-xl">
            <figure>
                <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{drink.strDrink}</h2>
            </div>
        </div>
    )
}

export default Card`}
                </pre>
                <p className="text-gray-700">
                  A komponens egy kártyát jelenít meg, amely tartalmaz egy képet és egy címet. 
                  A Tailwind CSS osztályok segítségével a kártya mérete, árnyéka és háttérszíne van beállítva.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. CardList Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A CardList komponens egy lista komponens, amely több Card komponenst jelenít meg.
                  A komponens egy listát kap props-okon keresztül, és minden elemhez létrehoz egy Card komponenst.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`import Card from './Card'

const CardList = ({list}) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5'>
        {
            list.length > 0 ? 
            list.map(cocktail => (
              <Card key={cocktail.idDrink} drink={cocktail}/>
            )) : 
            "Nincs megjeleníthető elem"
        }
    </div>
  )
}

export default CardList`}
                </pre>
                <p className="text-gray-700">
                  A komponens flexbox-ot használ a kártyák elrendezéséhez, és egy feltételes renderelést alkalmaz:
                  ha a lista üres, akkor egy üzenetet jelenít meg, egyébként pedig a kártyákat.
                  Fontos a key prop használata a map függvényben a React listák renderelésénél.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Category Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A Category komponens egy szűrési komponens, amely lehetővé teszi az italok szűrését kategória szerint.
                  A komponens Context API-t használ a kategóriák lekérdezéséhez, és useState/useEffect hook-okat az állapot kezeléséhez.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`import { useState, useEffect, useContext } from "react"
import CardList from "./CardList"
import CocktailContext from "../context/CocktailContext";

const Category = () => {
    const {categories} = useContext(CocktailContext)
    const [selectedCategory, setSelectedCategory] = useState("Cocktail");
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    const filterDrinks = async () => {
        try {
            const response = await fetch(
                \`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=\${selectedCategory}\`
            );
            const {drinks} = await response.json();
            setFilteredCocktails(drinks || []);
        } catch (error) {
            console.error('Hiba a lekérdezés során:', error);
            setFilteredCocktails([]);
        }
    }

    useEffect(() => {
        filterDrinks();
    }, [selectedCategory])

    return (
        <div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <div className="text-2xl font-bold">Szűrés kategória szerint</div>
                <select 
                    onChange={(e) => setSelectedCategory(e.target.value)} 
                    className="select select-bordered w-full max-w-xs"
                >
                    {categories.map(category => (
                        <option key={category.strCategory} value={category.strCategory}>
                            {category.strCategory}
                        </option>
                    ))}
                </select>
                <CardList list={filteredCocktails}/>
            </div>
        </div>
    )
}

export default Category`}
                </pre>
                <p className="text-gray-700">
                  A komponens bemutatja a Context API, useState és useEffect hook-ok használatát.
                  A useEffect hook figyeli a selectedCategory változását, és újra lekérdezi az adatokat amikor változik.
                  A komponens tartalmaz hibakezelést és null-check-et a válasz feldolgozásánál.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">4. Cocktail Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A Cocktail komponens egy részletes nézetet biztosít egy italról.
                  A komponens megjeleníti az ital képét, nevét, leírását és további információit.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`const Cocktail = ({cocktail}) => {
    return (
        <div className="hero bg-base-200 w-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    className="min-h-96 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{cocktail.strDrink}</h1>
                    <p className="py-6">
                        {cocktail.strInstructions}
                    </p>
                    <div className="badge badge-secondary h-14 font-bold text-xl p-7">
                        {cocktail.strCategory}
                    </div>
                    <div className="badge badge-neutral h-14 font-bold text-xl p-7">
                        {cocktail.strAlcoholic}
                    </div>
                    <div className="badge badge-accent h-14 font-bold text-xl p-7">
                        {cocktail.strGlass}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cocktail`}
                </pre>
                <p className="text-gray-700">
                  A komponens egy reszponzív elrendezést használ, amely különbözőképpen jelenik meg mobil és asztali nézetben.
                  A Tailwind CSS osztályok segítségével a komponens stílusa és elrendezése van beállítva.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">5. Name Komponens</h4>
                <p className="text-gray-700 mb-4">
                  A Name komponens egy kereső komponens, amely lehetővé teszi az italok keresését név szerint.
                  A komponens useState hook-ot használ az állapot kezeléséhez.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`import { useState } from "react"
import CocktailList from "./CocktailList"

const Name = () => {
    const [cocktailName, setCocktailName] = useState("")
    const [filteredCocktails, setFilteredCocktails] = useState([])

    const searchCocktail = async () => {
        try {
            const response = await fetch(
                \`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=\${cocktailName}\`
            );
            const {drinks} = await response.json();
            setFilteredCocktails(drinks || []);
        } catch (error) {
            console.error('Hiba a keresés során:', error);
            setFilteredCocktails([]);
        }
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <label className="input input-bordered flex items-center gap-2 w-96">
                <input 
                    onChange={(e) => setCocktailName(e.target.value)} 
                    type="text" 
                    className="grow" 
                    placeholder="Search" 
                />
                <svg
                    onClick={searchCocktail}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 cursor-pointer"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" 
                    />
                </svg>
            </label>

            <CocktailList list={filteredCocktails}/>
        </div>
    )
}

export default Name`}
                </pre>
                <p className="text-gray-700">
                  A komponens egy kereső mezőt és egy kereső gombot tartalmaz.
                  A keresés gombra kattintva lekérdezi az API-t, és megjeleníti a találatokat.
                  A komponens tartalmaz hibakezelést és null-check-et a válasz feldolgozásánál.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">NPM Parancsok és Függőségek</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Vite + React + Tailwind Projekt</h4>
                <p className="text-gray-700 mb-4">
                  Új projekt létrehozása és alapvető függőségek telepítése:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`# Új Vite projekt létrehozása React-tel
npm create vite@latest my-project -- --template react

# Projekt könyvtárba lépés
cd my-project

# Függőségek telepítése
npm install

# Tailwind CSS telepítése
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Gyakran használt további csomagok
npm install react-router-dom    # Routing
npm install axios              # HTTP kérések
npm install @heroicons/react   # Ikonok
npm install daisyui           # UI komponensek
npm install react-query       # Adatkezelés
npm install react-hook-form   # Űrlapkezelés
npm install zod               # Validáció

# Fejlesztői szerver indítása
npm run dev

# Build készítése
npm run build`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. XAMPP Backend</h4>
                <p className="text-gray-700 mb-4">
                  PHP és MySQL alapú backend fejlesztéshez szükséges csomagok:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`# Composer (PHP csomagkezelő) telepítése
# Windows: https://getcomposer.org/Composer-Setup.exe

# Új projekt inicializálása
composer init

# Gyakran használt PHP csomagok
composer require vlucas/phpdotenv    # Környezeti változók
composer require firebase/php-jwt    # JWT autentikáció
composer require phpmailer/phpmailer # Email küldés
composer require monolog/monolog     # Logolás

# XAMPP telepítése
# Windows: https://www.apachefriends.org/download.html

# XAMPP indítása
# Apache és MySQL szolgáltatások indítása a XAMPP Control Panel-ből`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. Prisma Backend</h4>
                <p className="text-gray-700 mb-4">
                  Node.js és Prisma alapú backend fejlesztéshez szükséges csomagok:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`# Új Node.js projekt inicializálása
npm init -y

# TypeScript telepítése
npm install -D typescript @types/node ts-node

# Prisma telepítése
npm install prisma
npm install @prisma/client

# Prisma inicializálása
npx prisma init

# Adatbázis migráció létrehozása
npx prisma migrate dev --name init

# Prisma Studio indítása (adatbázis kezelő felület)
npx prisma studio

# Gyakran használt további csomagok
npm install express              # Web szerver
npm install cors                # CORS kezelés
npm install dotenv             # Környezeti változók
npm install jsonwebtoken       # JWT autentikáció
npm install bcryptjs           # Jelszó titkosítás
npm install express-validator  # Validáció
npm install morgan             # Logolás
npm install nodemailer         # Email küldés

# Fejlesztői szerver indítása
npm run dev

# Build készítése
npm run build`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">4. Gyakran Használt NPM Parancsok</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`# Csomagok telepítése
npm install csomagnév
npm install csomagnév --save-dev  # fejlesztői függőségként
npm install csomagnév@verzió     # specifikus verzió

# Csomagok frissítése
npm update
npm update csomagnév

# Csomagok eltávolítása
npm uninstall csomagnév

# Függőségek listázása
npm list
npm list --depth=0              # csak a legfelső szintű függőségek

# Script futtatása
npm run scriptnév

# Globális csomagok
npm install -g csomagnév        # globális telepítés
npm uninstall -g csomagnév      # globális eltávolítás

# package.json frissítése
npm init                        # interaktív inicializálás
npm init -y                     # alapértelmezett értékekkel

# Függőségek tisztítása
npm cache clean --force         # npm cache törlése
rm -rf node_modules            # node_modules mappa törlése
npm install                    # függőségek újratelepítése`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">CSS és Reszponzív Design</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Tailwind CSS Alapok</h4>
                <p className="text-gray-700 mb-4">
                  A Tailwind CSS egy utility-first CSS keretrendszer, amely lehetővé teszi a gyors és egységes stílusozást.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Gyakran használt Tailwind osztályok

// Layout
flex flex-col          // Flexbox oszlop elrendezés
flex flex-row          // Flexbox sor elrendezés
grid grid-cols-3       // Grid 3 oszloppal
gap-4                  // Elemek közötti térköz
p-4                    // Padding minden irányban
px-4 py-2             // Padding X és Y tengelyen
m-4                    // Margin minden irányban
mx-auto               // Középre igazítás

// Színek
text-primary          // Elsődleges szövegszín
bg-white              // Fehér háttér
text-gray-600         // Szürke szöveg
border-gray-200       // Szürke keret

// Tipográfia
text-sm               // Kis szöveg
text-lg               // Nagy szöveg
font-bold             // Félkövér
text-center           // Középre igazított szöveg

// Reszponzív
sm:flex-row           // Small képernyőn sor elrendezés
md:grid-cols-2        // Medium képernyőn 2 oszlop
lg:grid-cols-3        // Large képernyőn 3 oszlop
xl:container          // Extra large képernyőn konténer

// Interaktív
hover:bg-gray-100     // Hover effekt
focus:ring-2          // Fókusz gyűrű
active:scale-95       // Kattintás effekt

// Animációk
transition-all        // Minden tulajdonság animálása
duration-300          // 300ms animáció idő
ease-in-out          // Animáció időzítés
grid: CSS Grid elrendezés

grid-cols-1: 1 oszlop mobil méret alatt

sm:grid-cols-2: 2 oszlop kis képernyőn (640px+)

md:grid-cols-3: 3 oszlop közepes képernyőn (768px+)

lg:grid-cols-4: 4 oszlop nagy képernyőn (1024px+)

gap-4: 1rem (16px) térköz az elemek között

p-4: 1rem (16px) padding a konténeren belül

flex: Flexbox elrendezés

flex-wrap: Többsoros flex elemek

justify-center: Középre igazítás

w-full: Teljes szélesség

sm:w-1/2: 50% szélesség kis képernyőn

md:w-1/3: 33% szélesség közepes képernyőn

lg:w-1/4: 25% szélesség nagy képernyőn

pl: className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
className="flex flex-wrap justify-center gap-4 p-4
-className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
// `}


                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Reszponzív Design</h4>
                <p className="text-gray-700 mb-4">
                  A reszponzív design lehetővé teszi, hogy a weboldal megfelelően jelenjen meg minden képernyőméreten.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Reszponzív breakpointok
sm: 640px    // Small devices
md: 768px    // Medium devices
lg: 1024px   // Large devices
xl: 1280px   // Extra large devices
2xl: 1536px  // 2X Extra large devices

// Reszponzív grid példa
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white p-4">1. elem</div>
  <div className="bg-white p-4">2. elem</div>
  <div className="bg-white p-4">3. elem</div>
</div>

// Reszponzív flex példa
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/2">Bal oldal</div>
  <div className="w-full md:w-1/2">Jobb oldal</div>
</div>

// Reszponzív szöveg
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Reszponzív címsor
</h1>

// Reszponzív padding/margin
<div className="p-4 md:p-6 lg:p-8">
  Tartalom
</div>

// Reszponzív elrejtés/megjelenítés
<div className="hidden md:block">
  Csak medium és nagyobb képernyőkön látható
</div>

// Reszponzív képek
<img 
  className="w-full h-auto object-cover"
  src="kep.jpg"
  alt="Reszponzív kép"
/>`}
                </pre>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">SQL Lekérdezések és API Műveletek</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Komplex SQL Lekérdezések</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet összetett SQL lekérdezéseket írni több tábla összekapcsolásával.
                  A példában egy rendelés adatait kérjük le, amely tartalmazza a termék és kategória információkat is.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Egy adott rendelés lekérdezése
app.get("/rendeles/:rendeles_azonosito", (req,res) =>{
    const rendeles_azonosito = req.params.razon
    db.all(
        SELECT rendelesek.rendeles_azonosito, rendelesek.rendelésdátum, rendelesek.termek_azonosito, rendelesek.darabszám, 
                termekek.terméknév as termek_nev, kategoriak.kategoria_nev as kategoria_nev 
         FROM rendelesek, termekek, kategoriak 
         WHERE rendelesek.termek_azonosito = termekek.termek_azonosito 
         AND termekek.katergoiraazonostio = kategoriak.katergoiraazonostio 
         AND rendelesek.rendeles_azonosito = ?,
        [rendeles_azonosito],
        (error, rows) =>{
            if (error){
                res.json({error})
            }else{
                res.json({rows})
            }
        }
    )
})`}
                </pre>
                <p className="text-gray-700">
                  A lekérdezés három táblát kapcsol össze (rendelesek, termekek, kategoriak) és részletes információkat ad vissza
                  egy adott rendelésről. A JOIN műveletek segítségével összekapcsoljuk a kapcsolódó adatokat.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. PATCH Művelet Implementálása</h4>
                <p className="text-gray-700 mb-4">
                  A PATCH művelet lehetővé teszi egy erőforrás részleges frissítését. A következő példa bemutatja,
                  hogyan lehet dinamikusan összeállítani egy UPDATE lekérdezést a megadott mezők alapján.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`
});
app.patch("/rendeles/:rendeles_azonosito", (req,res) =>{
    const rendeles_azonosito = req.params.razon
    const {rendelesdatum, termek_azonosito, db} = req.body
    const sql = 'UPDATE rendelesek SET rendelesdatum = ?, termek_azonosito = ?, db = ? WHERE rendeles_azonosito = ?'
    
    db.run(sql, [rendelesdatum, termek_azonosito, db, rendeles_azonosito], (error) =>{
        if (error){
            res.json({error})
            console.log(error)
        }else{
            res.json({message: "Rendelés adatai módosítva!"})
        }
    })
})

app.post("/kategoriak", (req,res) =>{
    const {kategoriakazonostio, kategoria_nev} = req.body
    const sql = (INSERT INTO kategoriak (kategoriakazonostio, kategoria_nev) VALUES (?, ?))

    db.run(sql, [kategoriakazonostio, kategoria_nev], (error) =>{
        if (error){
            res.json({error})
            console.log(error)
        }else{
            res.json({message: "Új kategória hozzáadva!"})
        }
    })
})
`
}
                </pre>
                <p className="text-gray-700">
                  A kód bemutatja a következő fontos koncepciókat:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Dinamikus SQL lekérdezés összeállítása a megadott mezők alapján</li>
                  <li>Paraméterek biztonságos kezelése prepared statements segítségével</li>
                  <li>Hibakezelés és megfelelő HTTP státuszkódok visszaadása</li>
                  <li>Válasz objektum strukturálása</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Backend Feladatok</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Egyszerű Feladatkezelő</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű feladatkezelő alkalmazást, amely lehetővé teszi a feladatok létrehozását, 
                  szerkesztését, lekérdezését és törlését.
                </p>
                
                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <ul className="list-disc pl-6 mb-4">
                  <li>POST /tasks: Új feladat létrehozása (cím, leírás, határidő)</li>
                  <li>GET /tasks: Összes feladat lekérdezése</li>
                  <li>PUT /tasks/:id: Feladat szerkesztése (azonosító alapján)</li>
                  <li>DELETE /tasks/:id: Feladat törlése (azonosító alapján)</li>
                </ul>

                <h5 className="font-semibold mb-2">Adatbázis (MySQL):</h5>
                <pre className="bg-gray-100 p-4 rounded">
                  {`CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  completed BOOLEAN DEFAULT FALSE
);`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Egyszerű Blog</h4>
                <p className="text-gray-700 mb-4">
                  Készíts egy egyszerű blog alkalmazást, amely lehetővé teszi a bejegyzések létrehozását, 
                  lekérdezését és törlését.
                </p>
                
                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <ul className="list-disc pl-6 mb-4">
                  <li>POST /posts: Új bejegyzés létrehozása (cím, tartalom)</li>
                  <li>GET /posts: Összes bejegyzés lekérdezése</li>
                  <li>GET /posts/:id: Bejegyzés lekérdezése (azonosító alapján)</li>
                  <li>DELETE /posts/:id: Bejegyzés törlése (azonosító alapján)</li>
                </ul>

                <h5 className="font-semibold mb-2">Adatbázis (MySQL):</h5>
                <pre className="bg-gray-100 p-4 rounded">
                  {`CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Backend Megoldások</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. Feladatkezelő Megoldás</h4>
                
                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Új feladat létrehozása
app.post("/tasks", (req, res) => {
  const { cim, leiras, hatarido } = req.body;
  const sql = \`INSERT INTO tasks (cim, leiras, hatarido) VALUES (?, ?, ?)\`;
  db.run(sql, [cim, leiras, hatarido], function (error) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({
      message: "Feladat sikeresen létrehozva!",
      id: this.lastID
    });
  });
});

// Összes feladat lekérdezése
app.get("/tasks", (req, res) => {
  const sql = \`SELECT * FROM tasks\`;
  db.all(sql, [], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(rows);
  });
});

// Feladat szerkesztése
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { cim, leiras, hatarido } = req.body;
  const sql = \`UPDATE tasks SET cim = ?, leiras = ?, hatarido = ? WHERE id = ?\`;
  const params = [cim, leiras, hatarido, id];

  db.run(sql, params, function (error) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "A feladat nem található." });
    }
    res.json({ message: "Feladat sikeresen frissítve!" });
  });
});

// Feladat törlése


import { useNavigate } from "react-router-dom";

const Kártyatörlés = ({ felhasználó, setRefresh }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE;

  const deletefelhasználó = async (azonosító) => {
    const response = await fetch($"{baseUrl}/végpontnév/id/$"{azonosító}, {
      method: DELETE
    });

    const data = await response.json();
    setRefresh(prev => !prev);
    alert(data.message);
    navigate("/"); // Navigálás főoldalra
  };

  return (
    <div className="bg-green-100 rounded-xl shadow p-4">
      <h2 className="text-xl font-bold">{felhasználó.nev}</h2>
      <p className="text-sm"> azonosító: {felhasználó.azonosító}</p>
      <button
        className="btn btn-error mt-2"
        onClick={() => deletefelhasználó(felhasználó.azonosító)}
      >
        Törlés
      </button>
    </div>
  );
};

export default Kártyatörlés;

ehhez fontos a .env file létrehozása az src-n belül
VITE_API_BASE=http://localhost:8000/


`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Blog Megoldás</h4>

                <h5 className="font-semibold mb-2">API végpontok:</h5>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// 1. Új bejegyzés létrehozása
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const sql = \`INSERT INTO posts (title, content) VALUES (?, ?)\`;

    db.run(sql, [title, content], function (error) {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ 
            message: "Bejegyzés sikeresen létrehozva!",
            id: this.lastID
        });
    });
});

// 2. Összes bejegyzés lekérdezése
app.get('/posts', (req, res) => {
    const sql = \`SELECT * FROM posts ORDER BY created_at DESC\`;
    db.all(sql, [], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

// 3. Bejegyzés lekérdezése azonosító alapján
app.get('/posts/:id', (req, res) => {
    const sql = \`SELECT * FROM posts WHERE id = ?\`;
    db.get(sql, [req.params.id], (error, post) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (!post) {
            return res.status(404).json({ error: "A bejegyzés nem található." });
        }
        res.json(post);
    });
});

// 4. Bejegyzés törlése azonosító alapján
app.delete('/posts/:id', (req, res) => {
    const sql = \`DELETE FROM posts WHERE id = ?\`;
    db.run(sql, [req.params.id], function (error) {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "A bejegyzés nem található." });
        }
        res.json({ message: "Bejegyzés sikeresen törölve!" });
    });
});`}
                </pre>

                <h5 className="font-semibold mb-2">Alkalmazás indítása:</h5>
                <pre className="bg-gray-100 p-4 rounded">
                  {`// index.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Adatbázis kapcsolat
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Hiba az adatbázis kapcsolódásakor:', err);
  } else {
    console.log('Sikeres kapcsolódás az adatbázishoz');
  }
});

// Végpontok itt...

app.listen(port, () => {
  console.log(\`Szerver fut a http://localhost:\${port} címen\`);
});`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'asztali' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Asztali alkalmazások fejlesztése</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. WPF (Windows Presentation Foundation)</h4>
                <p className="text-gray-700 mb-4">
                  A WPF egy modern UI keretrendszer a Windows asztali alkalmazások fejlesztéséhez. 
                  XAML alapú felhasználói felületeket lehet vele létrehozni, és erősen integrált a .NET platformmal.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Dron.cs - Adatmodell
    public class Dronok
    {
        // Drón neve,Típus,Gyártási év,Maximális sebesség (km/h),Akkumulátor kapacitás (mAh),Repülési idő (perc)
        public string Dron_nev { get; set; }
        public string Tipus { get; set; }
        public int GyartasiEv { get; set; }
        public int Maxsebesseg { get; set; }
        public int AkkumulatorK { get; set; }
        public int RepulesiIdo { get; set; }

        public Dronok(string sor, char hatarolo)
        {
            var adatok = sor.Split(hatarolo);
            Dron_nev = adatok[0];
            Tipus = adatok[1];
            GyartasiEv = Convert.ToInt32(adatok[2]);
            Maxsebesseg = Convert.ToInt32(adatok[3]);
            AkkumulatorK = Convert.ToInt32(adatok[4]);
            RepulesiIdo = Convert.ToInt32(adatok[5]);
        }
    }
}

// MainWindow.xaml - Felhasználói felület
    <Grid>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="0.5*"/>
            <ColumnDefinition Width="*"/>
            <ColumnDefinition Width="*"/>
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <StackPanel Grid.Column="0" Grid.Row="0" Margin="10">
            <TextBlock Text="Drónok" HorizontalAlignment="Center" FontWeight="Bold" FontSize="20"/>
            <ComboBox x:Name="comboTipusSzuro" Width="100" SelectionChanged="comboTipusSzuro_SelectionChanged"/>
        </StackPanel>

        <Button x:Name="buttonmegnyitas" Height="50" Width="100" Content="Megnyitás" Grid.Column="0" Grid.Row="1" Margin="10" Click="buttonmegnyitas_Click"/>
        <DataGrid x:Name="datagridDronok" Grid.Column="1" Grid.ColumnSpan="2" Grid.RowSpan="2" ColumnWidth="*" Margin="10"/>
    </Grid>
`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód egy drón kezelő alkalmazást mutat be. A Dron osztály az adatmodellt definiálja, 
                  míg a XAML kód a felhasználói felületet. A DataGrid komponens jeleníti meg az adatokat, 
                  és a ComboBox lehetővé teszi a szűrést típus szerint.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Adatkezelés és eseménykezelés</h4>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// MainWindow.xaml.cs - Adatkezelés és eseménykezelés
    public partial class MainWindow : Window
    {
        List<Dronok> dronok = new List<Dronok>();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonmegnyitas_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog fileDialog = new OpenFileDialog();

            if (fileDialog.ShowDialog() == true)
            {
                var sorok = File.ReadAllLines(fileDialog.FileName);
                dronok.Clear();

                for (int i = 1; i < sorok.Length; i++)
                {
                    dronok.Add(new Dronok(sorok[i], ','));
                }

                datagridDronok.ItemsSource = dronok;

                // Típusok ComboBox feltöltése
                var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t).ToList();
                tipusok.Insert(0, "Összes");
                comboTipusSzuro.ItemsSource = tipusok;
                comboTipusSzuro.SelectedIndex = 0;
            }
        }

        private void comboTipusSzuro_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            string kivalasztott = comboTipusSzuro.SelectedItem as string;

            if (kivalasztott == "Összes")
            {
                datagridDronok.ItemsSource = dronok;
            }
            else
            {
                datagridDronok.ItemsSource = dronok.Where(d => d.Tipus == kivalasztott).ToList();
            }
        }
    }
}
`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód bemutatja a fájl betöltését és az adatok kezelését. A Betoltes_Click eseménykezelő 
                  megnyitja a fájl kiválasztó ablakot, beolvassa a CSV fájlt, és feltölti a DataGrid-et. 
                  A TipusComboBox_SelectionChanged eseménykezelő pedig a szűrést végzi a kiválasztott típus szerint.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">3. OOP - Hadihajók kezelése</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja az objektumorientált programozás alapjait egy hadihajók kezelésére 
                  szolgáló rendszeren keresztül. Az absztrakt osztályok és az öröklődés használatával 
                  különböző típusú hadihajókat modellezünk.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`// Hajo.cs - Absztrakt alaposztály
public abstract class Hajo
{
    // Alapvető tulajdonságok
    public string Nev { get; set; }
    public int Hossz { get; set; }
    public int VizKiszoritas { get; set; }
    public double MaxSebesseg { get; set; }
    public string Orszag { get; set; }

    // Konstruktor
    protected Hajo(string nev, int hossz, int vizKiszoritas, double maxSebesseg, string orszag)
    {
        Nev = nev;
        Hossz = hossz;
        VizKiszoritas = vizKiszoritas;
        MaxSebesseg = maxSebesseg;
        Orszag = orszag;
    }

    // Absztrakt metódusok
    public abstract void Tamad();
    public abstract void Vedekezik();

    // ToString metódus felülírása
    public override string ToString()
    {
        return $"Név: {Nev}, Hossz: {Hossz}, Súly: {VizKiszoritas}, " +
               $"Max. sebesség: {MaxSebesseg}, Ország: {Orszag}";
    }
}

// Csatahajo.cs - Csatahajó osztály
public class Csatahajo : Hajo
{
    // Egyedi tulajdonságok
    public int AgyukSzama { get; set; }
    public int PancelVastagsag { get; set; }

    // Konstruktor
    public Csatahajo(string nev, int hossz, int vizKiszoritas, 
                     double maxSebesseg, string orszag, 
                     int agyukSzama, int pancelVastagsag) 
        : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
    {
        AgyukSzama = agyukSzama;
        PancelVastagsag = pancelVastagsag;
    }

    // Absztrakt metódusok implementálása
    public override void Tamad()
    {
        Console.WriteLine("A csatahajó ágyúkkal támad");
    }

    public override void Vedekezik()
    {
        Console.WriteLine("A csatahajót megvédi a páncélja");
    }
}

// RepulogepHordozo.cs - Repülőgép-hordozó osztály
public class RepulogepHordozo : Hajo
{
    // Egyedi tulajdonságok
    public int RepulogepekSzama { get; set; }
    public int KifutoHossz { get; set; }

    // Konstruktor
    public RepulogepHordozo(string nev, int hossz, int vizKiszoritas, 
                           double maxSebesseg, string orszag, 
                           int repulogepekSzama, int kifutoHossz) 
        : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
    {
        RepulogepekSzama = repulogepekSzama;
        KifutoHossz = kifutoHossz;
    }

    // Absztrakt metódusok implementálása
    public override void Tamad()
    {
        Console.WriteLine("A rep. hordozó repülőgépei támadnak");
    }

    public override void Vedekezik()
    {
        Console.WriteLine("A rep. hordozót megvédi a védelmi rakétarendszer");
    }

    // Egyedi metódusok
    public void Felszallas()
    {
        Console.WriteLine("Repülőgépek felszállnak");
    }

    public void Leszallas()
    {
        Console.WriteLine("Repülőgépek leszállnak");
    }
}

// Tengeralattjaro.cs - Tengeralattjáró osztály
public class Tengeralattjaro : Hajo
    {
        public int MerulesiMelyseg { get; set; }
        public int TorpedokSzama { get; set; }
        public Tengeralattjaro(string nev, int hossz, int vizKiszoritas, int maxSebesseg, string orszag, int merulesiMelyseg, int torpedokSzama) : base(nev, hossz, vizKiszoritas, maxSebesseg, orszag)
        {
            MerulesiMelyseg = merulesiMelyseg;
            TorpedokSzama = torpedokSzama;
        }

        public override void Tamad()
        {
            Console.WriteLine("A tengeralattjaró torpedókkal támad");
        }

        public override void Vedekezik()
        {
            Console.WriteLine("A tengeralattjáró elrejtőzik a mélységbe");
        }

        public void Merules()
        {
            Console.WriteLine("A tengeralattjaró merül");
        }
        public void Felszin()
        {
            Console.WriteLine("A tengeralattjaró a felszínre jön");
        }

        public override string ToString()
        {
            return base.ToString() + $", Merülési mélység: {MerulesiMelyseg}m, Torpedók száma: {TorpedokSzama}";
        }
    }

// Program.cs - Példa használat
class Program
{
    static void Main(string[] args)
    {
        // Különböző típusú hajók létrehozása
        List<Hajo> hajok = new List<Hajo>();
        
        hajok.Add(new Csatahajo("Missouri", 270, 45000, 33, "USA", 9, 430));
        hajok.Add(new RepulogepHordozo("Nimitz", 333, 97000, 30, "USA", 90, 300));
        hajok.Add(new Tengeralattjaro("Typhoon", 175, 48000, 27, "Oroszország", 400, 20));

        // Hajók kezelése
        foreach (var hajo in hajok)
        {
            Console.WriteLine(hajo.ToString());
            hajo.Tamad();
            hajo.Vedekezik();
            Console.WriteLine();
        }
    }
}`}
                </pre>
                <p className="text-gray-700 mb-4">
                  A kód bemutatja az objektumorientált programozás alapelveit:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Absztrakció: A Hajo absztrakt osztály definiálja az alapvető tulajdonságokat és működéseket</li>
                  <li>Öröklődés: A konkrét hajó típusok (Csatahajo, RepulogepHordozo, Tengeralattjaro) öröklik a Hajo osztály tulajdonságait</li>
                  <li>Polimorfizmus: A különböző hajó típusok saját implementációt adnak a Tamad() és Vedekezik() metódusokhoz</li>
                  <li>Kapszulázás: A tulajdonságok és metódusok megfelelően el vannak rejtve és védve</li>
                </ul>
                <p className="text-gray-700">
                  A program fő előnyei:
                </p>
                <ul className="list-disc pl-6">
                  <li>Könnyű bővíthetőség új hajó típusokkal</li>
                  <li>Kód újrafelhasználhatóság</li>
                  <li>Tisztább és karbantarthatóbb kód</li>
                  <li>Egységes interfész a különböző hajó típusok kezeléséhez</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Asztali Alkalmazások</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">1. WPF Adatbetöltés</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet adatokat betölteni és kezelni egy WPF alkalmazásban.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`
// MainWindow.xaml.cs
    public partial class MainWindow : Window
    {
        List<Dronok> dronok = new List<Dronok>();

        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonmegnyitas_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog fileDialog = new OpenFileDialog();

            if (fileDialog.ShowDialog() == true)
            {
                var sorok = File.ReadAllLines(fileDialog.FileName);
                dronok.Clear();

                for (int i = 1; i < sorok.Length; i++)
                {
                    dronok.Add(new Dronok(sorok[i], ','));
                }

                datagridDronok.ItemsSource = dronok;

                // Típusok ComboBox feltöltése
                var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t).ToList();
                tipusok.Insert(0, "Összes");
                comboTipusSzuro.ItemsSource = tipusok;
                comboTipusSzuro.SelectedIndex = 0;
            }
        }

        private void comboTipusSzuro_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            string kivalasztott = comboTipusSzuro.SelectedItem as string;

            if (kivalasztott == "Összes")
            {
                datagridDronok.ItemsSource = dronok;
            }
            else
            {
                datagridDronok.ItemsSource = dronok.Where(d => d.Tipus == kivalasztott).ToList();
            }
        }
    }
}
`}
                </pre>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">2. Konzolos Adatbetöltés</h4>
                <p className="text-gray-700 mb-4">
                  A következő példa bemutatja, hogyan lehet adatokat betölteni és kezelni egy konzol alkalmazásban.
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                  {`using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Drón Adatkezelő Rendszer");
        Console.WriteLine("=======================");

        List<Dron> dronok = new List<Dron>();
        bool fut = true;

        while (fut)
        {
            Console.WriteLine("\nVálassz műveletet:");
            Console.WriteLine("1. Adatok betöltése fájlból");
            Console.WriteLine("2. Adatok megjelenítése");
            Console.WriteLine("3. Szűrés típus szerint");
            Console.WriteLine("4. Kilépés");
            Console.Write("\nVálasztás (1-4): ");

            string valasztas = Console.ReadLine();

            switch (valasztas)
            {
                case "1":
                    BetoltesFajlbol(dronok);
                    break;
                case "2":
                    Megjelenites(dronok);
                    break;
                case "3":
                    SzuresTipusSzerint(dronok);
                    break;
                case "4":
                    fut = false;
                    break;
                default:
                    Console.WriteLine("Érvénytelen választás!");
                    break;
            }
        }
    }

    static void BetoltesFajlbol(List<Dron> dronok)
    {
        Console.Write("Adja meg a fájl elérési útját: ");
        string fajlUt = Console.ReadLine();

        try
        {
            string[] sorok = File.ReadAllLines(fajlUt);
            dronok.Clear();

            foreach (string sor in sorok.Skip(1))
            {
                string[] adatok = sor.Split('\t');
                if (adatok.Length >= 6)
                {
                    dronok.Add(new Dron
                    {
                        DroneNeve = adatok[0],
                        Tipus = adatok[1],
                        GyartasiEv = int.Parse(adatok[2]),
                        MaxSebesseg = int.Parse(adatok[3]),
                        AkkumulatorKapacitas = int.Parse(adatok[4]),
                        RepulesiIdo = int.Parse(adatok[5])
                    });
                }
            }
            Console.WriteLine($"Sikeres betöltés: {dronok.Count} drón adata.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Hiba történt: {ex.Message}");
        }
    }

    static void Megjelenites(List<Dron> dronok)
    {
        if (dronok.Count == 0)
        {
            Console.WriteLine("Nincsenek betöltött adatok!");
            return;
        }

        Console.WriteLine("\nDrónok listája:");
        Console.WriteLine("===============");
        foreach (var dron in dronok)
        {
            Console.WriteLine($"Név: {dron.DroneNeve}");
            Console.WriteLine($"Típus: {dron.Tipus}");
            Console.WriteLine($"Gyártási év: {dron.GyartasiEv}");
            Console.WriteLine($"Max. sebesség: {dron.MaxSebesseg} km/h");
            Console.WriteLine($"Akkumulátor: {dron.AkkumulatorKapacitas} mAh");
            Console.WriteLine($"Repülési idő: {dron.RepulesiIdo} perc");
            Console.WriteLine("---------------");
        }
    }

    static void SzuresTipusSzerint(List<Dron> dronok)
    {
        if (dronok.Count == 0)
        {
            Console.WriteLine("Nincsenek betöltött adatok!");
            return;
        }

        var tipusok = dronok.Select(d => d.Tipus).Distinct().OrderBy(t => t);
        Console.WriteLine("\nElérhető típusok:");
        int index = 1;
        foreach (var tipus in tipusok)
        {
            Console.WriteLine($"{index}. {tipus}");
            index++;
        }

        Console.Write("\nVálassz típust (szám): ");
        if (int.TryParse(Console.ReadLine(), out int valasztottIndex) && 
            valasztottIndex > 0 && valasztottIndex <= tipusok.Count())
        {
            string kivalasztottTipus = tipusok.ElementAt(valasztottIndex - 1);
            var szurtDronok = dronok.Where(d => d.Tipus == kivalasztottTipus);
            
            Console.WriteLine($"\n{kivalasztottTipus} típusú drónok:");
            Console.WriteLine("===============");
            foreach (var dron in szurtDronok)
            {
                Console.WriteLine($"Név: {dron.DroneNeve}");
                Console.WriteLine($"Gyártási év: {dron.GyartasiEv}");
                Console.WriteLine($"Max. sebesség: {dron.MaxSebesseg} km/h");
                Console.WriteLine("---------------");
            }
        }
        else
        {
            Console.WriteLine("Érvénytelen választás!");
        }
    }
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Grade13;