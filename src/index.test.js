const sayHi = require("./index.js");

test("Says 'Hello Mike' when 'Mike' is passed", () => {
  expect(sayHi("Mike")).toBe("Hello Mike");
});

// This is a simple test case that checks if the sayHi function
// returns the correct greeting message when a name is passed as an argument.
// The test uses the Jest testing framework, which provides the `expect`
// function to make assertions about the output of the sayHi function.
// In this case, we expect that when "Mike" is passed to sayHi,
// it will return "Hello Mike".
