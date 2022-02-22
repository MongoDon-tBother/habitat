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

  describe("first book - login", () => {
    test("there is a book for the login"), () => {
      const login_book = document.querySelector("#login_book");
      expect (login_book).toBe("login_book")
      
    }
  });

  
  
});