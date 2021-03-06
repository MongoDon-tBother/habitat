async function requestLogin(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    };
    const r = await fetch(
      `https://habitat-trackerrr.herokuapp.com/auth/login`,
      options
    );
    const data = await r.json();
    if (!data.success) {
      throw new Error("Login not authorised");
    }
    login(data.token);
  } catch (err) {
    console.warn(err);
  }
}

async function requestRegistration(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    };
    const r = await fetch(
      `https://habitat-trackerrr.herokuapp.com/auth/register`,
      options
    );
    const data = await r.json();
    if (data.err) {
      throw Error(data.err);
    }
    requestLogin(e);
  } catch (err) {
    console.warn(err);
  }
}

function login(token) {
  const user = jwt_decode(token);
  localStorage.setItem("token", token);
  localStorage.setItem("username", user.username);
  localStorage.setItem("userEmail", user.email);
  localStorage.setItem("userID", user.userID);
  window.location.hash = "#habit";
}

function logout() {
  localStorage.clear();
  window.location.hash = "#login";
}

function currentUser() {
  const username = localStorage.getItem("username");
  return username;
}

module.exports = { currentUser, requestLogin, requestRegistration, logout };
