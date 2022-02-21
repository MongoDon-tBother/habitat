const db = require("../dbConfig/init");

module.exports = class Habit {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.frequency = data.frequency;
    this.complete = data.complete;
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
        let habits = habitData.rows.map((h) => new Habit(h));
        resolve(habits);
      } catch (err) {
        reject("User not found");
      }
    });
  }
};
