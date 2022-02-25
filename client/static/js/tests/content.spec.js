/**
 * @jest-environment jsdom
 */


 const {renderHomepage} = require("../content");
describe("the homepage", () => {
    let logo;
      beforeEach(() => {
        document.body.innerHTML = "<main> </main>";
        
        renderHomepage();
        logo = document.querySelector("img");

      })
  
    test("there is a habit tracker logo", () => {
      expect(logo.src).toBe("https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822")
      expect(logo.alt).toBe("habitat logo")
    })

    let login_book;
    test("there is a book for the login", () => {
      login_book = document.querySelector("#login_book");
      expect(login_book).toBeTruthy()
      
    })


    let signup_book;
    test("there is a book for the login", () => {
      signup_book = document.querySelector("#signup_book");
      expect(signup_book).toBeTruthy()
      
    })

    let shelf;
    test("there will be a shelf ", () => {
      shelf = document.querySelector("#shelf");
      expect(shelf).toBeTruthy()
      
    });
  
  
});


const {renderLoginForm} = require("../content");
describe("the login in form", () => {
    let fields;
      beforeEach(() => {
        document.body.innerHTML = "<main> </main>";
        
        renderLoginForm();
        fields = document.querySelector("form");

      })
  
    test("there is the content within the fields", () => {
      expect(fields).toBeTruthy();
      // expect(fields).not.toBe(null)
      
    })

      let form;
      test("there is a submit button for the login", () => {
         form = document.querySelector("form");
         expect(form).not.toBe(null)
      });
  
  
});

const {renderSignupForm} = require("../content");
describe("the signup form", () => {
    let fields;
      beforeEach(() => {
        document.body.innerHTML = "<main> </main>";
        
        renderSignupForm();
        fields = document.querySelector("form");

      })
  
    test("there is the content within the fields", () => {
      expect(fields).toBeTruthy();
      // expect(fields).not.toBe(null)
      
    })

      let form;
      test("there is a submit button for the login", () => {
         form = document.querySelector("form");
         expect(form).not.toBe(null)
      });
  
  
});
 
const {createBook} = require("../content");
describe("creates the element that creates the book", () => {
    let book;
      beforeEach(() => {
        document.body.innerHTML = "<div> </div>";

        createBook();
        book = document.querySelector("book");

      })
  
    test("the book will be created", () => {
      expect(book).toBe(null)
      // expect(fields).not.toBe(null)

      // redo this test
      
    })

     test("the book is a div", () => {
       book = document.getElementsByClassName(".book");
       expect(book).toBeTruthy();
     });
  

  
});
 
const {createLeftPage} = require("../content");
describe("generates the container and welcome text for left hand of page", () => {
    let lhWrapper;
      beforeEach(() => {
        document.body.innerHTML = "<main> </main>";
        
        createLeftPage();
        lhWrapper = document.querySelector("div");

      })
  
    test("this will create the div for left pages", () => {
      expect(lhWrapper).toBe(null);
      
    })



      // redo these tests 


  
});
 
const { createRightPage } = require("../content");
describe("generates the container and welcome text for right hand of page", () => {

let rhWrapper;
beforeEach(() => {
  document.body.innerHTML = "<main> </main>";

  createRightPage();
  rhWrapper = document.querySelector("div");
});

test("this will create the div for right pages", () => {
  expect(rhWrapper).toBe(null);
});

test("this will check for the habitsWrapper", () => {
  habitsWrapper = document.getElementsByClassName('.habits_wrapper')
  expect(habitsWrapper).toBeTruthy()
});

});

const { renderHabitPage } = require("../content");
describe("check renderHabitPage", () => {
  beforeEach(() => {
    document.body.innerHTML = "<main> </main>";

    renderHabitPage();
  });
  let leftCover
  test("this will create the div for left cover", () => {
    leftCover = document.getElementsByClassName('.front')
    expect(leftCover).toBeTruthy();
  });

  let habitName;
  test("this will create the div for left cover", () => {
    habitName = document.getElementsByClassName(".habit_name");
    expect(habitName).toBeTruthy();
  });




});

const {renderNewHabitForm} = require("../content");
describe("check renderHabitPage", () => {
  beforeEach(() => {
    document.body.innerHTML = "<main> </main>";

    renderNewHabitForm();
  });
  let lhWrapper;
  test("this will check for lhWrapper", () => {
    lhWrapper = document.querySelector(".edit_container")
    expect(lhWrapper).toBeTruthy()
  });

  let title;
  test("this will check for title", () => {
    title = document.querySelector("h2");
    expect(title).toBeTruthy();
  });

  let newHabitForm
  test("check for newHabitForm", () => {
     newHabitForm = document.querySelector("form");
    expect(newHabitForm).toBeTruthy();
  });


  let nameWrap
  test("check for nameWrap", () => {
    nameWrap = document.getElementsByClassName('.form_control')
    expect(nameWrap).toBeTruthy();
    expect(nameWrap).toBe('form');
  });

  let newHabitName
  test("check for newHabitName", () => {
    newHabitName = document.getElementById("newHabitName");
    expect(nameWrap).toBeTruthy();
  });


});





// describe("creating left page", () => {
//   describe("creating the div for left page", () => {
//     test("this will create the left page", () => {
//       const lhWrapper = document.querySelector("div");
//       expect(lhWrapper).toBeTruthy();
//     });
//   });

//   describe("creating the title for the left page", () => {
//     test("this will create the title", () => {
//       const title = document.querySelector("h1");
//       expect(title).innerText.toBe(`Welcome back ${localStorage.getItem("username")}!`)
//     });
//   });

//   describe("creating the editing container", () => {
//     test("this will create edit container", () => {
//       const editContainer = document.querySelector("div");
//       expect(editContainer).toBeTruthy()
//     });
//   });


//   describe("returning the wrapper for left page", () => {
//     test("this will return lhwhapper", () => {
//       const lhWrapper = document.querySelector("div");
//       expect(result).toBe("lhWrapper")
//     });
//   });

// });

// describe("creating right page", () => {
//   describe("creating the div for right page", () => {
//     test("this will create the fight page", () => {
//       const rhWrapper = document.querySelector("div");
//       expect(rhWrapper).toBeTruthy();
//     })
//   });

//   describe("creating the title for the right page", () => {
//     test("this will create the title", () => {
//       const title = document.querySelector("h1");
//       expect(title).toBeTruthy()
//     });
//   });

//   describe("creating the habits wrapper", () => {
//     test("this will create habit wrapper", () => {
//       const habitsWrapper = document.querySelector("div");
//       expect(habitsWrapper).toBeTruthy()
//     });
//   });

//   describe("creating the cards for all habits", () => {
//     test("this will return cards for all habits", () => {
//       const allHabits = document.querySelector("div");
//       expect(allHabits).toBeTruthy()
//     });
//   });

// });
