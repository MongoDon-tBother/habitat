function renderHomepage(){
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src ='https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822'
  logo.alt='habitat logo'
  main.appendChild(logo)
  const login_book = document.createElement('login_book');

}

function renderLoginForm() {
  const deardiary = document.createElement("h1");
  deardiary.id = "deardiary";
  deardiary.textContent = "Dear Diary";
  main.appendChild(deardiary);

  const loginform = document.createElement("form");
  loginform.id = "loginform";

  const usernamelabel = document.createElement("label");
  usernamelabel.textContent = "Username";
  loginform.appendChild(usernamelabel);
  const usernameinput = document.createElement("input");
  usernameinput.type = "text";
  usernameinput.id = "usernameinput";
  loginform.appendChild(usernameinput);

  const passwordlabel = document.createElement("label");
  passwordlabel.textContent = "Password";
  loginform.appendChild(passwordlabel);
  const passwordinput = document.createElement("input");
  passwordinput.type = "password";
  passwordinput.id = "passwordinput";
  loginform.appendChild(usernameinput);

  main.appendChild(loginform)

  
  /*
  const fields = [
    { tag: "label", attributes: { type: "text", name: "username" } },
    { tag: "input", attributes: { type: "text", name: "username" } },
    { tag: "label", attributes: { type: "text", name: "username" } },
    { tag: "input", attributes: { type: "password", name: "password" } },
    { tag: "input", attributes: { type: "submit", value: "Login" } }
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestLogin);
  main.appendChild(form);
  */
}


