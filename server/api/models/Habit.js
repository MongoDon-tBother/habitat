const db = require("../dbConfig/init");
const { findSubhabits, findFrequency } = require("./helpers");

module.exports = class Habit {
  constructor(data) {
    this.name = data.name;
    this.frequency = data.frequency;
    this.complete = data.complete;
    this.streak = data.streak;
    this.subhabits = data.subhabits;
  }

  static findByUser(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.query(
          `SELECT * FROM habits WHERE user_id = $1;`,
          [id]
        );
        habitData = habitData.rows;
        for (let data of habitData) {
          const subData = await findSubhabits(data.id);
          if (subData.length) data.subhabits = subData;
          const frequencyData = await findFrequency(data.frequency_id);
          if (frequencyData.length) data.frequency = frequencyData[0];
        }
        let habits = habitData.map((h) => {
          return new Habit(h);
        });
        resolve(habits);
      } catch (err) {
        reject("User not found");
      }
    });
  }
};
