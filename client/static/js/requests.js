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
        authorization: localStorage.getItem("token"),
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
    const newHabitData = {
      name: document.getElementById("newHabitName").value,
      frequency: document.getElementById("newHabitFrequency").value,
      username: localStorage.getItem("username"),
      subhabits: document.getElementById("subhabits").value
    };
    const options = {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHabitData)
    };

    const response = await fetch("http://localhost:3000/habits", options);
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

async function deleteHabit(id) {
  try {
    const options = { method: "DELETE" };
    await fetch(`http://localhost:3000/habits/${id}`, options);
    window.location.reload();
  } catch (err) {
    console.warn(err);
  }
}

module.exports = { getAllUserHabits };
