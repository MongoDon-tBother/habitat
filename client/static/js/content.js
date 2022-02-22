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

  const shelf = document.createElement('div');
  shelf.id = 'shelf';
  main.appendChild(shelf)

} 


function renderLoginForm() {
  const fields = [
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password"
      }
    },
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
}

function renderSignupForm() {
  const fields = [
    {
      tag: "input",
      attributes: { type: "text", name: "username", placeholder: "Username" }
    },
    {
      tag: "input",
      attributes: { type: "email", name: "email", placeholder: "Email" }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "password",
        placeholder: "Password"
      }
    },
    {
      tag: "input",
      attributes: {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Confirm Password"
      }
    },
    { tag: "input", attributes: { type: "submit", value: "Create Account" } }
  ];
  const form = document.createElement("form");
  fields.forEach((f) => {
    let field = document.createElement(f.tag);
    Object.entries(f.attributes).forEach(([a, v]) => {
      field.setAttribute(a, v);
      form.appendChild(field);
    });
  });
  form.addEventListener("submit", requestRegistration);
  main.appendChild(form);
}

function renderHabitPage() {
  const newHabit = document.createElement('div')
  newHabit.textContent = 'newHabit'
  main.appendChild(newHabit)

   const welcomeMessage2 = document.createElement("h1");
   welcomeMessage2.textContent = `Welcome back ${localStorage.getItem("username")}!`;
   main.appendChild(welcomeMessage2);


  const welcomeMessage = document.createElement('h2')
  welcomeMessage.textContent = 'YO BITCHESSSSSSSSSSS THIS IS YO MFING PAGE WHERRE YOU KEEP TRACCK OF YO HABITS '
  main.appendChild(welcomeMessage)

  const leftpage = document.createElement("div");
  leftpage.id = 'leftpage'
  leftpage.textContent = 'Left Page'
  main.appendChild(leftpage)

  const rightpage = document.createElement("div");
  rightpage.id = "rightpage";
  rightpage.textContent = "Right Page";
  main.appendChild(rightpage);

  /*
  const today = new Date().toISOString().substring(0, 10);
  const todaysDate = document.createElement('div')
  todaysDate.innerHTML =
    '<input type="date" name="inputHabitsDate">';
  rightpage.append(todaysDate)
  todaysDate.querySelector(".inputHabitsDate").setAttribute("value", today);
*/
 

  const wrapperDiv = document.createElement('div')
  wrapperDiv.id = 'wrapper'
  wrapperDiv.classList = 'wrapper'
  wrapperDiv.textContent = 'this is the wrapper of wraps rap rap'
  wrapperDiv.style.display = 'block'
  rightpage.appendChild(wrapperDiv)
  
  



/*
  const modalsection = document.createElement('section')
  modalsection.id = 'modal'
  modalsection.style = 'display: none;'
  leftpage.appendChild(modalsection)

  const modali = document.createElement("i")
  modalsection.appendChild(modali)
  const modala = document.createElement("a")
  modala.href = "#"
  modala.addEventListener('click', () => {
    window.location.reload();
  })
  modala.textContent = 'x'
  modali.appendChild(modala)
  const modalh2 = document.createElement("h2")
  modalsection.appendChild(modalh2)
  const modalarticle = document.createElement('article')
  modalsection.appendChild(modalarticle);

*/









}



/*

function renderLoginForm() {
  const deardiary = document.createElement("h1");
  deardiary.id = "deardiary";
  deardiary.textContent = "Dear Diary";
  main.appendChild(deardiary);

  const loginform = document.createElement('form');
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
  loginform.appendChild(passwordinput);

  const submitinput = document.createElement("input");
  submitinput.type = 'submit'
  submitinput.value = "Login"
  loginform.appendChild(submitinput)

  loginform.addEventListener("submit", requestLogin);
  main.appendChild(loginform)


}

function renderSignupForm() {
  const signup = document.createElement("h1");
  signup.id = "signup";
  signup.textContent = "Create Account";
  main.appendChild(signup);

  const signupform = document.createElement("form");
  signupform.id = "signupform";

  const createusernamelabel = document.createElement("label");
  createusernamelabel.textContent = "Username";
  signupform.appendChild(createusernamelabel);

    const createusernameinput = document.createElement("input");
    createusernameinput.type = "text";
    createusernameinput.id = "createusernameinput";
    signupform.appendChild(createusernameinput);

   const createemaillabel = document.createElement("label");
   createemaillabel.textContent = "Email";
   signupform.appendChild(createemaillabel);
   const createemailinput = document.createElement("input");
   createemailinput.type = "email";
   createemailinput.id = "createemailinput";
   signupform.appendChild(createemailinput);

  const createpasswordlabel = document.createElement("label");
  createpasswordlabel.textContent = "Password";
  signupform.appendChild(createpasswordlabel);
  const createpasswordinput = document.createElement("input");
  createpasswordinput.type = "password";
  createpasswordinput.id = "createpasswordinput";
  signupform.appendChild(createpasswordinput);

   const confirmpasswordlabel = document.createElement("label");
   confirmpasswordlabel.textContent = "Confirm Password";
   signupform.appendChild(confirmpasswordlabel);
   const confirmpasswordinput = document.createElement("input");
   confirmpasswordinput.type = "password";
   confirmpasswordinput.id = "confirmpasswordinput";
   signupform.appendChild(confirmpasswordinput);

  const createsubmitinput = document.createElement("input");
  createsubmitinput.type = "submit";
  createsubmitinput.value = "Login";
  signupform.appendChild(createsubmitinput);

  signupform.addEventListener("submit", requestRegistration);
  main.appendChild(signupform);
}

*/


function render404() {
  const error = document.createElement("h2");
  error.textContent = "Oops, we can't find that page sorry!";
  main.appendChild(error);
}

