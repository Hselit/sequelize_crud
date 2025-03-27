<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library & Book Management API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
            background-color: #f9f9f9;
            color: #333;
        }

        h1, h2, h3 {
            color: #2c3e50;
        }

        code {
            background: #ecf0f1;
            padding: 2px 4px;
            border-radius: 4px;
        }

        pre {
            background: #ecf0f1;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        th, td {
            padding: 10px;
            border: 1px solid #bdc3c7;
            text-align: left;
        }

        th {
            background: #3498db;
            color: white;
        }

        a {
            color: #3498db;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>📚 Library & Book Management API</h1>
        <p>A RESTful API built with Node.js, Express.js, and Sequelize to manage libraries and their books.</p>

        <h2>🚀 Features</h2>
        <ul>
            <li>CRUD operations for Libraries and Books.</li>
            <li>Fetch all books associated with a specific library.</li>
            <li>Proper error handling and status codes.</li>
            <li>Sequelize ORM for database interaction.</li>
        </ul>

        <h2>🛠️ Technologies</h2>
        <ul>
            <li><strong>Node.js</strong> - JavaScript Runtime</li>
            <li><strong>Express.js</strong> - Web Framework</li>
            <li><strong>Sequelize</strong> - ORM</li>
            <li><strong>MySQL/PostgreSQL</strong> - Database</li>
            <li><strong>dotenv</strong> - Environment Variables</li>
        </ul>

        <h2>📋 Prerequisites</h2>
        <ul>
            <li>Node.js (v18 or later)</li>
            <li>MySQL or PostgreSQL</li>
        </ul>

        <h2>📦 Installation</h2>
        <pre><code>git clone https://github.com/yourusername/library-book-api.git
cd library-book-api
npm install</code></pre>

        <h2>🗂️ Database Setup</h2>
        <p>Create a <code>.env</code> file:</p>
        <pre><code>DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000</code></pre>

        <p>Create the database:</p>
        <pre><code>CREATE DATABASE libraryDB;</code></pre>

        <h2>📊 API Endpoints</h2>

        <h3>📚 Library Routes</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>/api/library/get</td>
                    <td>Retrieve all libraries</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/api/library/:lid</td>
                    <td>Get a library by ID</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/api/library/post</td>
                    <td>Add a new library</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>/api/library/:lid</td>
                    <td>Update a library</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/api/library/:lid</td>
                    <td>Delete a library</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/api/library/getbooks/:lid</td>
                    <td>Get all books for a library</td>
                </tr>
            </tbody>
        </table>

        <h3>📖 Book Routes</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>/api/book/get</td>
                    <td>Retrieve all books</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/api/book/post</td>
                    <td>Add a new book</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/api/book/:bid</td>
                    <td>Get a book by ID</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>/api/book/:bid</td>
                    <td>Update a book</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/api/book/:bid</td>
                    <td>Delete a book</td>
                </tr>
            </tbody>
        </table>

        <h2>🧪 Running the Server</h2>
        <pre><code>npm start</code></pre>
        <p>Access the API at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>

        <h2>🤝 Contributing</h2>
        <ol>
            <li>Fork the repository</li>
            <li>Create a new branch: <code>git checkout -b feature/your-feature</code></li>
            <li>Make your changes and commit: <code>git commit -m "Add feature"</code></li>
            <li>Push the branch: <code>git push origin feature/your-feature</code></li>
            <li>Open a Pull Request</li>
        </ol>

        <h2>📜 License</h2>
        <p>This project is licensed under the MIT License.</p>

        <h2>📧 Contact</h2>
        <p>For questions, contact <a href="mailto:your@email.com">your@email.com</a></p>

    </div>
</body>

</html>
