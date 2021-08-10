const express = require('express');
const router = require('../Router');
const cors = require('cors');
const supertest = require('supertest');
const db = require('../models/index');
const Book = require('../models/Schema');


describe('integration tests', () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);

  const request = supertest(app);

  // connect to db before...
  beforeAll(async () => {
    // connect to postgresql db / sequelize
    const config = {host: 'localhost', dialect: 'postgres', logging: false};
    const sequelize = new Sequelize('legacyread', 'postgres', '12345', config);
  })

  // delete objects (Books, etc.) to ensure 'clean-slate' each test run
  afterAll(async () => {
    // delete Book logic
    await db.Book.destroy({where: {}, truncate: true });
  })

   it('should get 200', (done) => {
     request(app).get('/').expect(200, done);
   });

  it('should save a book to the database', async (done) => {
    const title = "This is a test";
    // title: req.body.volumeInfo.title,
    const res = await request.postBook('/books')
    // .expect(volumeInfo)
//    .send({title})
//   })

  const book = db.Book.findOne({ where: { title = "This is a test"} });
  expect(db.Book.title).toBe(title);
  done();


})