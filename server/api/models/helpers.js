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
        `SELECT monday, tuesday, wednesday, thursday, friday, saturday, sunday
          FROM frequency
          WHERE id = $1;`,
        [id]
      );
      let soloData = frequencyData.rows[0];
      const frequencyArr = [];
      for (day in soloData) {
        if (soloData[day]) {
          frequencyArr.push(1);
        } else {
          frequencyArr.push(0);
        }
      }
      resolve(frequencyArr);
    } catch (err) {
      reject("frequency not found");
    }
  });
};

module.exports = { findSubhabits, findFrequency };
