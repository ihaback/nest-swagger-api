# Nest API

Testing out building a simple api with the [Nest framework](https://nestjs.com/). Uses sqlite for prototyping.

<h2><a id="features">🌟 Features</a></h2>

- GET, POST, DELETE and PATCH articles
- Access articles by ID
- Login route to get acces to /users route

<h2><a id="table-of-contents">📚 Table of Contents</a></h2>

- [Development](#development)
  - [Installation](#installation)
  - [Set up the database](#set-up-the-database)
  - [Running the app](#running-the-app)

<h2><a id="development">💻 Development</a></h2>

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

