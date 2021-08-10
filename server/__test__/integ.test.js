const express = require('express');
const router = require('../Router');
const cors = require('cors');
const supertest = require('supertest');
const db = require('../models/index');
const Book = require('../models/Schema');

test(`post something`, async () => {
  const query = {
   measures: ['Foo.bar'],
   order: [
    ['Foo.bar', 'asc'],
    ['Foo.foo', 'desc'],
   ],
  };
  const res = await request(app)
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