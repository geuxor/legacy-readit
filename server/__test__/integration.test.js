const express = require('express');
const router = require('../Router');
const cors = require('cors');
const supertest = require('supertest');
const db = require('../models/index');
const Book = require('../models/Schema');
const { Sequelize } = require('sequelize');

describe('integration tests', () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);

  const request = supertest(app);
  beforeAll(async () => {
    const config = { host: 'localhost', dialect: 'postgres', logging: false };
    const sequelize = new Sequelize('legacyread', 'geuxor', 'geuxor', config);
  })

  // delete objects (Books, etc.) to ensure 'clean-slate' each test run
  afterAll(async () => {
    // delete Book logic
    await db.Book.destroy({ where: {}, truncate: true });
  })

  it(`post something to DB`, async () => {
    const query = {
      volumeInfo: {
        title: 'great book',
        imageLinks: { thumbnail: "http://books.google.com/books/content?id=-NRRAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
        description: 'blabla blablabla blobloblo bliblibli',
        publishedDate: "2014-03",
        author: "Mats & Enzo"
      }
    }

    const res = await request.post(`/books`)
      .set('Content-type', 'application/json')
      // .set('Cookie', '')
      .send(query)
      .expect(200);
    const book = await db.Book.findOne({ where: { title: query.volumeInfo.title } })
    expect(book.title).toBe('great book');
  })

  it(`delete something from db`, async () => {
    const createRes = await db.Book.create(
      {
        title: 'bad book',
        description: 'blobloblo bliblibli',
        publishedDate: "2014-03",
        image: "http://books.google.com/books/content?id=-NRRAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        author: "Mats & Enzo"
      })
    // console.log('createRes', createRes.dataValues)
    const { id } = createRes
    const res = await request.delete(`/books/${id}`)
    console.log('Response from delete req==>', res.body.message);
    const book = await db.Book.findOne({ where: { id: id } })
    // console.log('book ====>', book);
    expect(book).toBe(null)
  })

})


