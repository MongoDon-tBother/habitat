function renderHomepage(){
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src ='https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822'
  logo.alt='habitat logo'
  main.appendChild(logo)
  const login_book = document.createElement('div');
  login_book.id = 'login_book';
  main.appendChild(login_book)

  const signup_book = document.createElement('div');
  signup_book.id = 'signup_book';
  main.appendChild(signup_book)

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


}
