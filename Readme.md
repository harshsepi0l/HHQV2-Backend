

# Backend for Hornet HQ Version.2 (Prototype)

This is a prototype version of [HornetHQ](https://hornethq.kzoo.edu/Student/Account/Login?ReturnUrl=/Student/) being developed for Kalamazoo College. This repository serves as a backbone for the backend of the project, with seamless serverless functions with and deployed a MySQL database on PlanetScale.

    Backend Implemented:
    /Backend
    ├── /Backend
    │   ├── package.json
    │   ├── api —— index.js, ….js (Vercel)
    │   └── ...
    
	Frontend Expectation:
	/Frontend
    ├── /Frontend —> Connection
    │   ├── package.json
    │   ├── src
    │   └── ...

This is how the project is setup and the frontend branch is managed by a different group of students. Here is the Repository for the frontend branch - [Frontend](https://github.com/RochX/hornethq-2.0-integrated)


***please ask one of the Backend Members before changing anything***


>Only for Backend Changes (Not necessary as the repository automates the below functions)
To get started:
 --Use the CLI and make sure to have Node installed on your system 
 -- type `npx prisma install` 
 -- if it asks you to update to the latest verison, try it (does not work most of the time).

>DB CLI (Use only if we need to pull/push new tables):
-- `npx/npm prisma db pull`  to pull all the tables from the database (introspection). 
-- `npx/npm prisma db push`  to push all the tables from the prisma client (outrospection). 
-- `npx/npm prisma help` to get help for the CLI

>If your using studio then run these CLI: 
-- `npx/npm prisma generate` to generate the models for the client
-- `npx/npm prisma studio` to visually see the models in a localhost
-- Please look at the notion on how to make the .env file

Happy Coding!
