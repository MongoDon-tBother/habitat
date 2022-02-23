/**
 * @jest-environment jsdom
 */
describe("the homepage", () => {
  describe("main", () => {
    test("there is a main tag"), () => {
      const main = document.querySelector("main");
      expect(main).toBeTruthy();
    }
  });

  describe("the main", () => {
    test("there is a main tag"), () => {
      const main = document.querySelector("main");
      expect(main).toBeTruthy();
    }
  });

  describe("the logo", () => {
    test("there is a habit tracker logo"), () => {
      const logo = document.querySelector("#logo");
      expect (src). toBe("https://images-platform.99static.com//n7liZzsSMdHX6uDJpYOA2QTUVeA=/163x13:1335x1185/fit-in/500x500/99designs-contests-attachments/116/116335/attachment_116335822")
      expect(alt).toBe("habitat logo")
    }
  });

  describe("first book ", () => {
    test("there is a book for the login"), () => {
      const login_book = document.querySelector("#login_book");
      expect (login_book).toBe("login_book")
      
    }
  });

  describe("second book", () => {
    test("there is a second book for the sign up"), () => {
      const signup_book = document.querySelector("#signup_book");
      expect (signup_book).toBe("signup_book")
      
    }
  });

  describe("shelf", () => {
    test("there will be a shelf "), () => {
      const shelf = document.querySelector("#shelf");
      expect (shelf).toBe("shelf")
      
    }
  });
  
});

describe("login form", () => {
  describe("fields", () => {
    test("there is the content within the fields"), () => {
      const form = document.querySelector("form");
      expect(form).toBeTruthy();
    }
  });

  describe(" login submit button", () => {
    test("there is a submit button for the login "), () => {
      const form = document.querySelector("form");
      expect(onSubmit).toHaveBeenCalled();
    }
  });

});

describe("signup form", () => {
  describe("fields", () => {
    test("there is the content within the fields"), () => {
      const form = document.querySelector("form");
      expect(form).toBeTruthy();
    }
  });

  describe("signup submit button", () => {
    test("there is a submit button for the signup "), () => {
      const form = document.querySelector("form");
      expect(onSubmit).toHaveBeenCalled();
    }
  });

});

describe("creating book element", () => {
  describe("creating the book", () => {
    test("they will add the book element"), () => {
      const book = document.querySelector("div");
      expect(book).toBeTruthy();
    }
  });

  

  
});

describe("creating left page", () => {
  describe("creating the div for left page", () => {
    test("this will create the left page"), () => {
      const lhWrapper = document.querySelector("div");
      expect(lhWrapper).toBeTruthy();
    }
  });

  describe("creating the title for the left page", () => {
    test("this will create the title"), () => {
      const title = document.querySelector("h1");
      expect(title).innerText.toBe(`Welcome back ${localStorage.getItem("username")}!`)
    }
  });

  describe("creating the editing container", () => {
    test("this will create edit container"), () => {
      const editContainer = document.querySelector("div");
      expect(editContainer).toBeTruthy()
    }
  });

  describe("returning the wrapper for left page", () => {
    test("this will return lhwhapper"), () => {
      const lhWrapper = document.querySelector("div");
      expect(result).toBe("lhWrapper")
    }
  });

});

describe("creating right page", () => {
  describe("creating the div for right page", () => {
    test("this will create the fight page"), () => {
      const rhWrapper = document.querySelector("div");
      expect(rhWrapper).toBeTruthy();
    }
  });

  describe("creating the title for the right page", () => {
    test("this will create the title"), () => {
      const title = document.querySelector("h1");
      expect(title).toBeTruthy()
    }
  });

  describe("creating the habits wrapper", () => {
    test("this will create habit wrapper"), () => {
      const habitsWrapper = document.querySelector("div");
      expect(habitsWrapper).toBeTruthy()
    }
  });

  describe("creating the cards for all habits", () => {
    test("this will return cards for all habits"), () => {
      const allHabits = document.querySelector("div");
      expect(allHabits).toBeTruthy()
    }
  });


  
});