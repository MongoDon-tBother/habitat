const { logout } = require("./auth");

async function getAll(category) {
  try {
    const response = await fetch(`http://localhost:3000/${category}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}

async function getItem(category, id) {
  try {
    const response = await fetch(`http://localhost:3000/${category}/${id}`);
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
        "authorization": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(
      `http://localhost:3000/habits/${localStorage.getItem("userID")}`,
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
    const farray = []
    document.querySelectorAll(".days").forEach((f) => {
      if (f.checked) farray.push(1);
      if (!f.checked) farray.push(0);
    });
    const newHabitData = {
      name: document.getElementById("newHabitName").value,
      frequency: farray,
      username: localStorage.getItem("username"),
      subhabits: document.getElementById("newSubHabit").value
    };
    const options = {
      method: "POST",
      headers: {
        "authorization": localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHabitData)
    };

    const response = await fetch("http://localhost:3000/habits", options);
    console.log(newHabitData);
    const data = await response.json();
    console.log(farray);
    console.log(data)
    window.location.reload();
    if (data.err) {
      console.warn(data.err);
      logout();
    }
    return data;
  } catch (err) {
    console.warn(err);
  };
}

async function deleteHabit(id) {
  try {
    const options = { method: "DELETE" };
    await fetch(`http://localhost:3000/habits/${id}`, options);
    window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}

module.exports = { getAllUserHabits, postHabit };
