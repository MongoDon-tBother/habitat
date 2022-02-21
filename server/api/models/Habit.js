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
        // get all habit data matching that user id
        let habitData = await db.query(
          `SELECT * FROM habits WHERE user_id = $1;`,
          [id]
        );
        habitData = habitData.rows;
        for (let data of habitData) {
          // get the subhabits that match the habit id
          const subData = await findSubhabits(data.id);
          if (subData.length) data.subhabits = subData;
          // get the frequency that match the habit id
          const frequencyData = await findFrequency(data.frequency_id);
          if (frequencyData.length) data.frequency = frequencyData;
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

  static async newHabit(habitData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, frequency, username, subhabits } = habitData;
        // Check to see if a frequency matching the new habit frequency exists
        let duplicate = false;
        let frequency_id;
        let previousFrequency = await db.query(`SELECT id FROM frequency`);
        for (let row of previousFrequency.rows) {
          const allFrequencyArr = await findFrequency(row.id);
          if (`${allFrequencyArr}` === `${frequency}`) {
            duplicate = true;
            frequency_id = row.id;
            break;
          }
        }
        // If that frequency doesn't already exist add it to the DB
        if (!duplicate) {
          const frequencyBool = frequency.map((m) => {
            if (m === 1) {
              return "TRUE";
            } else if (m === 0) {
              return "FALSE";
            } else {
              throw new Error("unexpected value in array");
            }
          });
          frequency_id = await db.query(
            `INSERT INTO frequency (monday, tuesday, wednesday, thursday, friday, saturday, sunday)
           VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;`,
            frequencyBool
          );
          frequency_id = frequency_id.rows[0].id;
        }
        // set complete and streak to false as its a new habit
        const complete = false;
        const streak = 0;
        // find the user id that matches the username
        let user_id = await db.query(
          `SELECT id FROM users WHERE username = $1;`,
          [username]
        );
        user_id = user_id.rows[0].id;
        // Store the new habit in the DB and return the id
        let habit_id = await db.query(
          `INSERT INTO habits (name, frequency_id, complete, streak, user_id)
           VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
          [name, frequency_id, complete, streak, user_id]
        );
        habit_id = habit_id.rows[0].id;
        // If there are any subhabits add them to the DB
        if (subhabits) {
          for (let subhabit of subhabits) {
            await db.query(
              `INSERT INTO subhabits (name, complete, habit_id)
             VALUES ($1, $2, $3);`,
              [subhabit.name, subhabit.complete, habit_id]
            );
          }
        }
        // Return all habits for the user
        resolve(this.findByUser(user_id));
      } catch (err) {
        reject(err);
      }
    });
  }
};
