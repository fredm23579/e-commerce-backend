
  <div align="center">
  <h1 align="center">E-Commerce Backend</h1>
  <h3>Codebase for the E-Commerce Backend platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=for-the-badge" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=for-the-badge" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-MySQL-004E89?logo=MySQL&style=for-the-badge" alt='MySQL\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Sequelize-004E89?logo=Sequelize&style=for-the-badge" alt='Sequelize\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-dotenv-004E89?logo=dotenv&style=for-the-badge" alt='dotenv\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-nodemon-004E89?logo=nodemon&style=for-the-badge" alt='nodemon"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This is a Node.js project with a MySQL database, using Sequelize as the ORM. The project includes a RESTful API for managing categories, products, and tags, as well as seed data for testing and development.

---

## 🌟 Features

 Sure, here is a list of features for the project:<br>
* RESTful API for managing categories, products, and tags
* MySQL database with Sequelize as the ORM
* Seed data for testing and development
* Node.js project structure with routes, models, and controllers
* Environment variables for configuration and secrets management
* Gitignore file for ignoring unnecessary files and directories
* LICENSE file for open-source licensing information
* README.md file for project documentation and usage instructions

---

## 📁 Repository Structure

```sh
├── .env
├── .gitignore
├── db
│   └── schema.sql
├── LICENSE
├── models
│   ├── Category.js
│   ├── index.js
│   ├── Product.js
│   ├── ProductTag.js
│   └── Tag.js
├── package-lock.json
├── package.json
├── README.md
├── routes
│   ├── api
│   │   ├── category-routes.js
│   │   ├── index.js
│   │   ├── product-routes.js
│   │   └── tag-routes.js
│   └── index.js
├── seeds
│   ├── category-seeds.js
│   ├── index.js
│   ├── product-seeds.js
│   ├── product-tag-seeds.js
│   └── tag-seeds.js
└── server.js

```

---

## 💻 Code Summary

<details><summary>\models</summary>

| File | Summary |
| ---- | ------- |
| Category.js |  The code defines a Category model in Sequelize, which represents a category for a blog or other content management system. |
| index.js |  The code defines relationships between four models (Product, Category, Tag, and ProductTag) in a Node.js application using Sequelize, specifically defining the associations between Product and Category, and Product and Tag through the use of belongsTo and hasMany methods. |
| Product.js |  The code defines a Sequelize model for a Product table with columns for an ID, product name, price, stock, and category ID, as well as options for the table name, timestamps, and relationships. |
| ProductTag.js |  The code defines a Sequelize model for a ProductTag table, with columns for an ID, product ID, and tag ID, and sets up associations between the two. |
| Tag.js |  The code defines a Tag model in Sequelize, which represents a tag for a blog post. |

</details>

---

<details><summary>\routes\api</summary>

| File | Summary |
| ---- | ------- |
| category-routes.js |  The code defines a router for a RESTful API that allows users to perform CRUD (create, read, update, delete) operations on categories and their associated products. |
| index.js |  The code defines an Express.js router that routes requests to different endpoints based on the URL path, with each endpoint defined in a separate module. |
| product-routes.js |  The code defines an Express.js router for a RESTful API that handles CRUD (create, read, update, delete) operations on products, including GET, POST, PUT, and DELETE requests. |
| tag-routes.js |  The code defines an Express.js router for handling requests related to tags, including GET, POST, PUT, and DELETE requests for retrieving, creating, updating, and deleting tag data. |

</details>

---

<details><summary>\routes</summary>

| File | Summary |
| ---- | ------- |
| index.js |  The code defines an Express.js router that routes requests to either the API routes or a 404 page with a custom message. |

</details>

---

<details><summary>\seeds</summary>

| File | Summary |
| ---- | ------- |
| category-seeds.js |  The code defines a function `seedCategories` that creates categories in the database by calling the `bulkCreate` method of the `Category` model, passing in an array of category data. |
| index.js |  The code is a Node.js script that seeds data into a MySQL database using the Sequelize ORM, including categories, products, tags, and product tags. |
| product-seeds.js |  The code defines a function `seedProducts` that creates and saves multiple products to the database using the `bulkCreate` method of the `Product` model. |
| product-tag-seeds.js |  The code defines a function `seedProductTags` that creates and bulk inserts data into the `ProductTag` model in the database. |
| tag-seeds.js |  The code defines a function `seedTags` that creates and saves multiple instances of the `Tag` model in the database, using an array of objects containing tag names. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code sets up an Express.js server, requiring the necessary dependencies and configuring the server to listen on port 3001. It also sets up a connection to a database using Sequelize and turns on routes for handling HTTP requests. |

</details>

---

## 🚀 Getting Started

 To get started with this project, follow these steps:<br>
1. Install the necessary dependencies by running `npm install` in your terminal.
2. Create a `.env` file in the root directory of the project and add your MySQL credentials to it.
3. Start the server by running `npm run start`.
4. Seed the database by running `npm run seed`.
5. Test the API endpoints by using a tool like Postman or cURL.

Note: This guide assumes that you have Node.js and npm installed on your system. If you don't have them, you can download them from the official websites.


