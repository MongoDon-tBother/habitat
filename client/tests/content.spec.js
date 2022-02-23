/**
 * @jest-environment jsdom
 */


 const {renderHomepage} = require("../static/js/content");
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


const {renderLoginForm} = require("../static/js/content");
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

const {renderSignupForm} = require("../static/js/content");
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
 
const {createBook} = require("../static/js/content");
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

  
});
 
const {createLeftPage} = require("../static/js/content");
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

      let left_title;
      test("there is title for left page", () => {
         left_title = document.querySelector("h1");
         expect(left_title).toBe("title");
      });
  
      // redo these tests 

      
  
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