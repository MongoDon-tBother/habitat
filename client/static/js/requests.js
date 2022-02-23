const { logout } = require("./auth");

async function getAll(category) {
  try {
    const response = await fetch(
      `https://habitat-trackerrr.herokuapp.com/${category}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getItem(category, id) {
  try {
    const response = await fetch(
      `https://habitat-trackerrr.herokuapp.com/${category}/${id}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getAllUserHabits() {
  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(
      `https://habitat-trackerrr.herokuapp.com/habits/${localStorage.getItem(
        "userID"
      )}`,
      options
    );
    const data = await response.json();
    if (data.err) {
      console.warn(data.err);
      logout();
    }
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function postHabit(e) {
  e.preventDefault();
  try {
    const sarray = [];
    document.querySelectorAll(".subHabitName").forEach((h) => {
      sarray.push(h.value);
    });

    const newarray = sarray.map((g) => {
      return { name: g, complete: 0 };
    });

    const farray = [];
    document.querySelectorAll(".days").forEach((f) => {
      if (f.checked) farray.push(1);
      if (!f.checked) farray.push(0);
    });
    const newHabitData = {
      name: document.getElementById("newHabitName").value,
      frequency: farray,
      username: localStorage.getItem("username"),
      subhabits: newarray
    };
    const options = {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHabitData)
    };
    const response = await fetch(
      "https://habitat-trackerrr.herokuapp.com/habits",
      options
    );
    const data = await response.json();
    window.location.reload();
    if (data.err) {
      console.warn(data.err);
    }
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function deleteHabit(id) {
  try {
    const options = { method: "DELETE" };
    await fetch(
      `https://habitat-trackerrr.herokuapp.com/habits/${id}`,
      options
    );
    //window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}
/**
 * @param  {int} id - The habit id
 * @param  {object} body - The body should be in the form { name, frequency, subhabits, complete, streak }. all args are optional
 */
async function updateHabit(id, data) {
  try {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    await fetch(
      `https://habitat-trackerrr.herokuapp.com/habits/${id}`,
      options
    );
  } catch (err) {
    console.warn(err);
  }
}

module.exports = {
  getAllUserHabits,
  getItem,
  deleteHabit,
  postHabit,
  updateHabit
};
