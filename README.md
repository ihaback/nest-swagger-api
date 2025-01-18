# Nest API

Testing out building a simple api with the [Nest framework](https://nestjs.com/).

## Description

This project is a simple API built using the Nest framework. It includes basic CRUD operations for articles and user authentication features. The API uses SQLite for the database, making it easy to set up and prototype.

<h2><a id="features">🌟 Features</a></h2>

- GET, POST, DELETE and PATCH articles
- Access articles by ID
- POST Register user
- Login route to get acces to GET, POST, PATCH, DELETE /users routes

<h2><a id="table-of-contents">📚 Table of Contents</a></h2>

- [Description](#description)
- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Set up the database](#set-up-the-database)
  - [Running the app](#running-the-app)
  - [Authentication](#authentication)

<h2><a id="development">💻 Development</a></h2>

<h3><a id="prerequisites">🔧 Prerequisites</a></h3>

- Node.js (>= 14.x)
- npm (>= 6.x)

<h3><a id="installation">📦 Installation</a></h3>

```bash
npm install
```
<h3><a id="set-up-the-database">🗄️ Set up the database</a></h3>

```bash
# Generate prisma client
npx prisma generate

# Setup the database
npx prisma db push

# Seed the database
npx prisma db seed
```

<h3><a id="running-the-app">🚀 Running the app</a></h3>

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

<h3><a id="authentication">🔐 Authentication</a></h3>

```ts
// users for authenticating towards the /auth/login endpoint
const users = [
  {
    username: "joe@doe.com",
    email: "password-joe",
  },
  {
    username: "jane@doe.com",
    email: "password-jane",
  },
];
```