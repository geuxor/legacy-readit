<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub license](https://img.shields.io/github/license/geuxor/legacy-readit)](https://github.com/geuxor/legacy-readit/blob/develop/LICENSE)[![GitHub release](https://img.shields.io/github/release/geuxor/colonyal)](https://github.com/geuxor/colonyal/releases/tag/0.9.0)[![GitHub contributors](https://img.shields.io/github/contributors/geuxor/colonyal)](https://github.com/geuxor/colonyal/graphs/contributors)[![GitHub issues](https://img.shields.io/github/issues/geuxor/colonyal)](https://GitHub.com/geuxor/legacy-readit/issues)

<span align="center">![ForTheBadge Refactored-with-love](https://forthebadge.com/images/badges/built-with-love.svg)</span>

<p align="center">
 <img src="./readmeFiles/logo-small.png" alt="logo" style="zoom:40%;" >
</p>

## Table of contents

[Read It](#read-it)  
[Teaser](#teaser)  
[Tech Stack](#tech-stack)  
[Running colonyal](#running-colonyal)  
[Architecture](#architecture)
[Observations](#observations)  
[Developers Team](#developers-team)  
[Contributors](#contributors-✨)

# Read it
A platform to fetch books from the Google Api and save them in a personal wishlist. 

The App uses Google API to fetch books, and allows a user to store them in a database as a wish list. It allows a user to search for specific topis, view a list of books, rate them and save them to the database. 

## Teaser

<p align="center">
 <img src="./readmeFiles/back.png" style="zoom:20%;" >
</p>

## Tech Stack

![https://www.npmjs.com/package/bcrypt](https://img.shields.io/badge/bcrypt--v1--white?style=for-the-badge&logo=npm)
![https://redis.io](https://img.shields.io/badge/redis--v1--white?style=for-the-badge&logo=redis)
![https://expressjs.com](https://img.shields.io/badge/express--v1--white?style=for-the-badge&logo=express)
![https://www.postgresql.org](https://img.shields.io/badge/postgresQL--v1--white?style=for-the-badge&logo=postgresQL)
![https://sequelize.org](https://img.shields.io/badge/sequelize--v1--white?style=for-the-badge&logo=sequelize)
![https://www.stripe.com](https://img.shields.io/badge/stripe%20Connect--v1--white?style=for-the-badge&logo=stripe)

### Frontend

![https://www.cloudinary.com](https://img.shields.io/badge/cloudinary--v1--white?style=for-the-badge&logo=cloudinary)
![https://www.stripe.com](https://img.shields.io/badge/stripe%20Connect--v1--white?style=for-the-badge&logo=stripe)
![https://www.reactjs.org](https://img.shields.io/badge/react--v1--white?style=for-the-badge&logo=react)
![https://github.com/axios/axios](https://img.shields.io/badge/axios--v1--white?style=for-the-badge&logo=npm)
![https://redux.js.org/](https://img.shields.io/badge/redux--v1--white?style=for-the-badge&logo=redux)

### CI / CD

- [Github Features](https://github.com/features/actions)
- [Trello](https://trello.com)

### Hosting

- [Netlify](https://netlify.com) for Frontend and Backend

### Authentication

- Session Cookies with bcrypt

### APIs

- [Stripe Connect](https://stripe.com)

## Running colonyal

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

## Architecture
(coming soon...)

## Observations

##### Upcoming Pull Requests

- Deploy colonyal to the web
- Create PWA 

## Developer, Designer and PM

😋  German - [Github](https://github.com/geuxor) - [LinkedIn](https://www.linkedin.com/in/german-b)\

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
   <a href="https://github.com/geuxor/colonyal/commits?author=geuxor" title="Code">💻</a></td>
 </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
