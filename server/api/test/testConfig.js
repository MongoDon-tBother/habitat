const request = require("supertest");
const fs = require("fs");
const { Pool } = require("pg");
const app = require("../server");

const testSeed = fs.readFileSync(__dirname + "/test_seeds.sql").toString();

const initDatabase = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = new Pool();
      await db.query(testSeed);
      resolve("Test DB has been reset");
    } catch (err) {
      reject(`Test DB could not be reset`);
    }
  });
};

global.request = request;
global.app = app;
global.initDatabase = initDatabase;
global.port = process.env.PORT || 5000;
