const db = require("../dbConfig/init");

const findSubhabits = (habit_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let subhabitData = await db.query(
        `SELECT name, complete FROM subhabits WHERE habit_id = $1;`,
        [habit_id]
      );
      resolve(subhabitData.rows);
    } catch (err) {
      reject("Subhabit not found");
    }
  });
};

const findFrequency = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let frequencyData = await db.query(
        `SELECT * FROM frequency WHERE id = $1;`,
        [id]
      );
      resolve(frequencyData.rows);
    } catch (err) {
      reject("frequency not found");
    }
  });
};

module.exports = { findSubhabits, findFrequency };
