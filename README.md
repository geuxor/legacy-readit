<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub license](https://img.shields.io/github/license/geuxor/legacy-readit)](https://github.com/geuxor/legacy-readit/blob/develop/LICENSE)[![GitHub release](https://img.shields.io/github/release/geuxor/colonyal)](https://github.com/geuxor/colonyal/releases/tag/0.9.0)[![GitHub contributors](https://img.shields.io/github/contributors/geuxor/colonyal)](https://github.com/geuxor/colonyal/graphs/contributors)[![GitHub issues](https://img.shields.io/github/issues/geuxor/colonyal)](https://GitHub.com/geuxor/legacy-readit/issues)

<span align="center">![ForTheBadge Refactored-with-love](https://forthebadge.com/images/badges/built-with-love.svg)</span>

**Refactored the code to TypeScript and created multiple unit/end-end/integration tests using Jest, Babel, testing-library.**

## Table of contents

[Read It](#read-it)  
[Tech Stack](#tech-stack)  
[Running colonyal](#running-colonyal)  
[Architecture](#architecture)
[Observations](#observations)  
[Developers Team](#developers-team)  
[Contributors](#contributors-✨)

# Read it
A platform to fetch books from the Google Api and save them in a personal wishlist. 

The App uses Google API to fetch books, and allows a user to store them in a database as a wish list. It allows a user to search for specific topis, view a list of books, rate them and save them to the database.

Refactored the code to TypeScript and created multiple unit/end-end/integration tests using Jest, Babel, testing-library.

## Tech Stack

![https://www.typescriptlang.org](https://img.shields.io/badge/typescript--v1--white?style=for-the-badge&logo=typescript)
![https://www.reactjs.org](https://img.shields.io/badge/react--v1--white?style=for-the-badge&logo=react)
![https://expressjs.com](https://img.shields.io/badge/express--v1--white?style=for-the-badge&logo=express)
![https://sequelize.org](https://img.shields.io/badge/sequelize--v1--white?style=for-the-badge&logo=sequelize)
![https://www.postgresql.org](https://img.shields.io/badge/postgresQL--v1--white?style=for-the-badge&logo=postgresQL)
![https://testing-library.com/](https://img.shields.io/badge/testing-library--v1--white?style=for-the-badge&logo=testing-library)
![https://jestjs.io/](https://img.shields.io/badge/jest--v1--white?style=for-the-badge&logo=jest)
![https://babeljs.io/](https://img.shields.io/badge/babel--v1--white?style=for-the-badge&logo=babel)

## Running ReadIt

- Fork & clone this repo  
- Run `npm i` in colonyal directory  
- Adjust the necessary env variables to match your system. There's a .env.copy file to help you with this process. (You will need an API key for Stripe)  
- Run `npm start`

- Make sure you have postgreSQL installed on your machine [mac](https://www.postgresql.org/download/macosx/) || [windows](https://www.postgresql.org/download/windows/)  
- Run `npm i` in colonyal/server directory  
- Adjust the necessary env variables to match your system. There's a .env.copy file to help you with this process.
- Edit the ./config/config.json file with your database details.
- With the database running, run `npm run recreateDb`. This will generate the tables in the database and seed the data to get the project started.
- Run `nodemon` in colonyal/server directory

## Developers

😋  German - [Github](https://github.com/geuxor) - [LinkedIn](https://www.linkedin.com/in/german-b)\
😋  Aaron - [Github](https://github.com/aaronzomback) - [LinkedIn](https://www.linkedin.com/in/aaron-zomback)\
😋  Seb - [Github](https://github.com/greenseb) - [LinkedIn](https://www.linkedin.com/in/sebastiangreen13)

## Contributors ✨

Thanks goes to these wonderful people ([💝 ](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  <td align="center"><a href="http://www.linkedin.com/in/german-b">
   <img src="https://avatars.githubusercontent.com/u/16254346?v=4" width="100px;" alt=""/><br /><sub><b>German</b></sub></a><br />
   <a href="#infra-gexuor" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> 
   <a href="https://github.com/geuxor/legacy-readit/commits?author=geuxor" title="Code">💻</a></td>
  <td align="center"><a href="https://www.linkedin.com/in/aaron-zomback/">
   <img src="https://avatars.githubusercontent.com/u/?v=4" width="100px;" alt=""/><br /><sub><b>Aaron</b></sub></a><br />
   <a href="#infra-aaronzomback" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> 
   <a href="https://github.com/geuxor/legacy-readit/commits?author=aaronzomback" title="Code">💻</a></td>
  <td align="center"><a https://www.linkedin.com/in/sebastiangreen13/">
   <img src="https://avatars.githubusercontent.com/u/?v=4" width="100px;" alt=""/><br /><sub><b>Seb</b></sub></a><br />
   <a href="#infra-greenseb" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> 
   <a href="https://github.com/geuxor/legacy-readit/commits?author=greenseb" title="Code">💻</a></td>
 </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
