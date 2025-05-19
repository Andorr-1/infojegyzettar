import React, { useState } from 'react';

const Grade12 = () => {
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
          <section>
            <h3 className="text-2xl font-bold mb-4">JavaScript és HTML Integráció</h3>
            <div className="space-y-4">
              <p>DOM manipuláció és eseménykezelés:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// DOM elemek kiválasztása
const element = document.getElementById('myElement');
const elements = document.getElementsByClassName('myClass');
const queryElement = document.querySelector('.myClass');

// Eseménykezelés
element.addEventListener('click', function(event) {
    console.log('Kattintás történt!');
    event.preventDefault();
});

// DOM módosítás
element.innerHTML = 'Új tartalom';
element.classList.add('newClass');
element.style.color = 'red';`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">AJAX és Fetch API</h3>
            <div className="space-y-4">
              <p>Adatok lekérése és küldése:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// Fetch API használata
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Adatok megjelenítése a DOM-ban
        document.getElementById('result').innerHTML = data.message;
    })
    .catch(error => console.error('Hiba:', error));

// POST kérés küldése
fetch('https://api.example.com/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        email: 'john@example.com'
    })
});`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">SQL Alapok</h3>
            <div className="space-y-4">
              <p>Adatbázis műveletek:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- Tábla létrehozása
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Adatok beszúrása
INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');

-- Adatok lekérdezése
SELECT * FROM users WHERE email LIKE '%@example.com';

-- Adatok frissítése
UPDATE users 
SET email = 'new@example.com' 
WHERE username = 'john_doe';

-- Adatok törlése
DELETE FROM users WHERE id = 1;`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">SQL Összetett Lekérdezések</h3>
            <div className="space-y-4">
              <p>JOIN és aggregációs függvények:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`-- INNER JOIN példa
SELECT users.username, orders.order_date
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN példa
SELECT users.username, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id;

-- HAVING használata
SELECT category, AVG(price) as avg_price
FROM products
GROUP BY category
HAVING avg_price > 100;`}
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">JavaScript és SQL Integráció</h3>
            <div className="space-y-4">
              <p>Adatbázis műveletek JavaScript-ből:</p>
              <pre className="bg-gray-100 p-4 rounded">
                {`// Adatok lekérése az adatbázisból
async function getUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Hiba:', error);
    }
}

// Adatok megjelenítése
function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = users.map(user => \`
        <div class="user-card">
            <h3>\${user.username}</h3>
            <p>\${user.email}</p>
        </div>
    \`).join('');
}

// Új felhasználó hozzáadása
async function addUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        console.log('Sikeres hozzáadás:', result);
    } catch (error) {
        console.error('Hiba:', error);
    }
}`}
              </pre>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'feladatok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">1. Feladat: Felhasználói Rendszer</h3>
            <p>Készíts egy felhasználói rendszert, amely tartalmazza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regisztrációs és bejelentkezési űrlapot</li>
              <li>Felhasználói adatok validációját JavaScript-tel</li>
              <li>Adatok küldését AJAX-szal</li>
              <li>Felhasználói profil megjelenítését</li>
              <li>Profil szerkesztési lehetőséget</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">2. Feladat: Termék Katalógus</h3>
            <p>Készíts egy termék katalógust, amely tartalmazza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Termékek listázását kategóriák szerint</li>
              <li>Keresési és szűrési lehetőségeket</li>
              <li>Termék részletek megjelenítését</li>
              <li>Kosár funkcionalitást</li>
              <li>Rendelés leadási űrlapot</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">3. Feladat: Blog Rendszer</h3>
            <p>Készíts egy blog rendszert, amely tartalmazza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Blog bejegyzések listázását</li>
              <li>Új bejegyzés létrehozását</li>
              <li>Komment rendszert</li>
              <li>Kategóriákat és címkéket</li>
              <li>Keresési és szűrési lehetőségeket</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">4. Feladat: Adatbázis Kezelő</h3>
            <p>Készíts egy adatbázis kezelő felületet, amely tartalmazza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Táblák létrehozását és módosítását</li>
              <li>Adatok beszúrását és frissítését</li>
              <li>Komplex lekérdezések írását</li>
              <li>Adatok exportálását és importálását</li>
              <li>Adatbázis biztonsági beállításokat</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">5. Feladat: E-learning Platform</h3>
            <p>Készíts egy e-learning platformot, amely tartalmazza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kurzusok kezelését</li>
              <li>Felhasználói szerepköröket (tanár, diák)</li>
              <li>Feladatok és teszt rendszert</li>
              <li>Értékelési rendszert</li>
              <li>Statisztikákat és jelentéseket</li>
            </ul>
          </section>
        </div>
      )}

      {activeTab === 'megoldasok' && (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">1. Feladat megoldása</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Felhasználói Rendszer</title>
</head>
<body>
    <div id="auth-forms">
        <form id="register-form">
            <input type="text" id="username" required>
            <input type="email" id="email" required>
            <input type="password" id="password" required>
            <button type="submit">Regisztráció</button>
        </form>
    </div>

    <div id="user-profile" style="display: none;">
        <h2>Profil</h2>
        <div id="profile-data"></div>
        <button id="edit-profile">Szerkesztés</button>
    </div>

    <script>
        // JavaScript
        document.getElementById('register-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const userData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            };

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const result = await response.json();
                if (result.success) {
                    showProfile(result.user);
                }
            } catch (error) {
                console.error('Hiba:', error);
            }
        });

        function showProfile(user) {
            document.getElementById('auth-forms').style.display = 'none';
            document.getElementById('user-profile').style.display = 'block';
            document.getElementById('profile-data').innerHTML = \`
                <p>Felhasználónév: \${user.username}</p>
                <p>Email: \${user.email}</p>
            \`;
        }
    </script>
</body>
</html>

-- SQL
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
            </pre>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">2. Feladat megoldása</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Termék Katalógus</title>
</head>
<body>
    <div class="container">
        <div class="filters">
            <input type="text" id="search" placeholder="Keresés...">
            <select id="category">
                <option value="">Minden kategória</option>
            </select>
        </div>

        <div id="products" class="product-grid"></div>

        <div id="cart" class="cart">
            <h3>Kosár</h3>
            <div id="cart-items"></div>
            <div id="cart-total"></div>
        </div>
    </div>

    <script>
        // JavaScript
        let products = [];
        let cart = [];

        async function loadProducts() {
            try {
                const response = await fetch('/api/products');
                products = await response.json();
                displayProducts(products);
            } catch (error) {
                console.error('Hiba:', error);
            }
        }

        function displayProducts(products) {
            const container = document.getElementById('products');
            container.innerHTML = products.map(product => \`
                <div class="product-card">
                    <img src="\${product.image}" alt="\${product.name}">
                    <h3>\${product.name}</h3>
                    <p>\${product.price} Ft</p>
                    <button onclick="addToCart(\${product.id})">Kosárba</button>
                </div>
            \`).join('');
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
            }
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            cartItems.innerHTML = cart.map(item => \`
                <div class="cart-item">
                    <span>\${item.name}</span>
                    <span>\${item.price} Ft</span>
                </div>
            \`).join('');

            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = \`Összesen: \${total} Ft\`;
        }
    </script>
</body>
</html>

-- SQL
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE cart_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);`}
            </pre>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">3. Feladat megoldása</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Rendszer</title>
</head>
<body>
    <div class="container">
        <div class="blog-header">
            <h1>Blog</h1>
            <button id="new-post">Új bejegyzés</button>
        </div>

        <div class="filters">
            <input type="text" id="search" placeholder="Keresés...">
            <select id="category">
                <option value="">Minden kategória</option>
            </select>
        </div>

        <div id="posts" class="posts-grid"></div>
    </div>

    <script>
        // JavaScript
        let posts = [];

        async function loadPosts() {
            try {
                const response = await fetch('/api/posts');
                posts = await response.json();
                displayPosts(posts);
            } catch (error) {
                console.error('Hiba:', error);
            }
        }

        function displayPosts(posts) {
            const container = document.getElementById('posts');
            container.innerHTML = posts.map(post => \`
                <article class="post-card">
                    <h2>\${post.title}</h2>
                    <div class="post-meta">
                        <span>\${post.author}</span>
                        <span>\${new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <p>\${post.excerpt}</p>
                    <div class="post-tags">
                        \${post.tags.map(tag => \`<span class="tag">\${tag}</span>\`).join('')}
                    </div>
                    <div class="comments">
                        <h3>Hozzászólások</h3>
                        \${post.comments.map(comment => \`
                            <div class="comment">
                                <strong>\${comment.author}</strong>
                                <p>\${comment.content}</p>
                            </div>
                        \`).join('')}
                    </div>
                </article>
            \`).join('');
        }

        document.getElementById('new-post').addEventListener('click', () => {
            // Új bejegyzés létrehozása
        });
    </script>
</body>
</html>

-- SQL
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    author_id INT,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT,
    author_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE post_tags (
    post_id INT,
    tag_id INT,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);`}
            </pre>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">4. Feladat megoldása</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adatbázis Kezelő</title>
</head>
<body>
    <div class="container">
        <div class="sidebar">
            <h3>Táblák</h3>
            <ul id="tables"></ul>
            <button id="new-table">Új tábla</button>
        </div>

        <div class="main-content">
            <div class="query-editor">
                <textarea id="sql-query" placeholder="SQL lekérdezés..."></textarea>
                <button id="execute-query">Végrehajtás</button>
            </div>

            <div class="results">
                <table id="query-results"></table>
            </div>
        </div>
    </div>

    <script>
        // JavaScript
        let tables = [];

        async function loadTables() {
            try {
                const response = await fetch('/api/tables');
                tables = await response.json();
                displayTables(tables);
            } catch (error) {
                console.error('Hiba:', error);
            }
        }

        function displayTables(tables) {
            const container = document.getElementById('tables');
            container.innerHTML = tables.map(table => \`
                <li>
                    <span>\${table.name}</span>
                    <button onclick="showTableStructure('\${table.name}')">Struktúra</button>
                    <button onclick="showTableData('\${table.name}')">Adatok</button>
                </li>
            \`).join('');
        }

        document.getElementById('execute-query').addEventListener('click', async () => {
            const query = document.getElementById('sql-query').value;
            try {
                const response = await fetch('/api/execute-query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query })
                });
                const result = await response.json();
                displayResults(result);
            } catch (error) {
                console.error('Hiba:', error);
            }
        });

        function displayResults(results) {
            const table = document.getElementById('query-results');
            if (results.length === 0) {
                table.innerHTML = '<tr><td>Nincs találat</td></tr>';
                return;
            }

            const headers = Object.keys(results[0]);
            table.innerHTML = \`
                <thead>
                    <tr>\${headers.map(h => \`<th>\${h}</th>\`).join('')}</tr>
                </thead>
                <tbody>
                    \${results.map(row => \`
                        <tr>\${headers.map(h => \`<td>\${row[h]}</td>\`).join('')}</tr>
                    \`).join('')}
                </tbody>
            \`;
        }
    </script>
</body>
</html>

-- SQL
-- Példa tábla létrehozása
CREATE TABLE example_table (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Példa adatok beszúrása
INSERT INTO example_table (name, description) 
VALUES 
    ('Első elem', 'Ez az első elem leírása'),
    ('Második elem', 'Ez a második elem leírása');

-- Példa lekérdezés
SELECT * FROM example_table WHERE name LIKE '%elem%';`}
            </pre>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">5. Feladat megoldása</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// HTML
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-learning Platform</title>
</head>
<body>
    <div class="container">
        <nav class="main-nav">
            <div class="user-info">
                <span id="user-role"></span>
                <span id="user-name"></span>
            </div>
            <ul>
                <li><a href="#courses">Kurzusok</a></li>
                <li><a href="#assignments">Feladatok</a></li>
                <li><a href="#grades">Értékelések</a></li>
            </ul>
        </nav>

        <main>
            <div id="courses" class="section">
                <h2>Kurzusok</h2>
                <div id="course-list"></div>
            </div>

            <div id="assignments" class="section">
                <h2>Feladatok</h2>
                <div id="assignment-list"></div>
            </div>

            <div id="grades" class="section">
                <h2>Értékelések</h2>
                <div id="grade-list"></div>
            </div>
        </main>
    </div>

    <script>
        // JavaScript
        let user = null;
        let courses = [];
        let assignments = [];

        async function loadUserData() {
            try {
                const response = await fetch('/api/user');
                user = await response.json();
                updateUserInfo();
                loadContent();
            } catch (error) {
                console.error('Hiba:', error);
            }
        }

        function updateUserInfo() {
            document.getElementById('user-role').textContent = user.role;
            document.getElementById('user-name').textContent = user.name;
        }

        async function loadContent() {
            if (user.role === 'teacher') {
                await loadTeacherContent();
            } else {
                await loadStudentContent();
            }
        }

        async function loadTeacherContent() {
            try {
                const [coursesRes, assignmentsRes] = await Promise.all([
                    fetch('/api/courses'),
                    fetch('/api/assignments')
                ]);
                courses = await coursesRes.json();
                assignments = await assignmentsRes.json();
                displayTeacherContent();
            } catch (error) {
                console.error('Hiba:', error);
            }
        }

        function displayTeacherContent() {
            // Kurzusok megjelenítése
            const courseList = document.getElementById('course-list');
            courseList.innerHTML = courses.map(course => \`
                <div class="course-card">
                    <h3>\${course.title}</h3>
                    <p>\${course.description}</p>
                    <div class="course-stats">
                        <span>\${course.studentCount} diák</span>
                        <span>\${course.assignmentCount} feladat</span>
                    </div>
                    <button onclick="editCourse(\${course.id})">Szerkesztés</button>
                </div>
            \`).join('');

            // Feladatok megjelenítése
            const assignmentList = document.getElementById('assignment-list');
            assignmentList.innerHTML = assignments.map(assignment => \`
                <div class="assignment-card">
                    <h3>\${assignment.title}</h3>
                    <p>\${assignment.description}</p>
                    <div class="assignment-stats">
                        <span>\${assignment.submittedCount} leadott</span>
                        <span>\${assignment.gradedCount} értékelt</span>
                    </div>
                    <button onclick="gradeAssignment(\${assignment.id})">Értékelés</button>
                </div>
            \`).join('');
        }
    </script>
</body>
</html>

-- SQL
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    teacher_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (teacher_id) REFERENCES users(id)
);

CREATE TABLE course_enrollments (
    course_id INT,
    student_id INT,
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (course_id, student_id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (student_id) REFERENCES users(id)
);

CREATE TABLE assignments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    assignment_id INT,
    student_id INT,
    content TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grade DECIMAL(5,2),
    feedback TEXT,
    FOREIGN KEY (assignment_id) REFERENCES assignments(id),
    FOREIGN KEY (student_id) REFERENCES users(id)
);`}
            </pre>
          </section>
        </div>
      )}
    </div>
  );
};

export default Grade12; 