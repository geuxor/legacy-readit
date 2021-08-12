const express = require('express');
const router = require('../Router');
const cors = require('cors');
const supertest = require('supertest');
const db = require('../models/index');
const Book = require('../models/Schema');

test(`post something`, async () => {

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(router);

  const request = supertest(app);
  
  const query = {
   measures: ['Foo.bar'],
   order: [
    ['Foo.bar', 'asc'],
    ['Foo.foo', 'desc'],
   ],
  };
  const res = await request
  .post(`/cubejs-api/v1/load`)
  .set('Content-type', 'application/json')
  .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.t-IDcSemACt8x4iTMCda8Yhe3iZaWbvV5XKSTbuAn0M')
  .send({ query })
  .expect(200);

  expect(res.body.query.order).toStrictEqual([
   { id: 'Foo.bar', desc: false },
   { id: 'Foo.foo', desc: true },
  ]);
  expect(res.body.query.measures).toStrictEqual(['Foo.bar']);
 });