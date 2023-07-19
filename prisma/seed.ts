import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  // create two dummy users

  const passwordJoe = await bcrypt.hash('password-joe', roundsOfHashing);

  const passwordJane = await bcrypt.hash('password-jane', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'joe@doe.com' },
    update: {
      password: passwordJoe,
    },
    create: {
      email: 'joe@doe.com',
      name: 'Joe Doe',
      password: passwordJoe,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'jane@doe.com' },
    update: {
      password: passwordJane,
    },
    create: {
      email: 'jane@doe.com',
      name: 'Jane Doe',
      password: passwordJane,
    },
  });

  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'What is Nest.js?' },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'What is Nest.js?',
      body: 'Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express, harnessing its power while adding a layer of abstraction to make development smoother and more structured.',
      description:
        'Born out of the Node.js and TypeScript ecosystem, Nest.js has quickly become a popular choice for building server-side applications, APIs, and microservices',
      published: true,
      authorId: user1.id,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'What is Prisma ORM?' },
    update: {
      authorId: user2.id,
    },
    create: {
      title: 'What is Prisma ORM?',
      body: 'Prisma is an open-source, next-generation Object-Relational Mapping (ORM) tool that acts as an interface between your application and the database. It allows developers to interact with databases using a powerful and intuitive API while maintaining database schema consistency and integrity.',
      description:
        'Prisma ORM is a powerful and flexible database toolkit that simplifies the interaction between applications and databases.',
      published: true,
      authorId: user2.id,
    },
  });

  console.log({ user1, user2, post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
