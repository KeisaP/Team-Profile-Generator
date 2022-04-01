const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number", () => {
  const testONumber = 15;
  const e = new Manager("Tony", 5, "email@test.com", testONumber);
  expect(e.officeNumber).toBe(testONumber);
});

test("Get office number using getOffice", () => {
  const testONumber = 15;
  const e = new Manager("Tony", 5, "email@test.com", testONumber);
  expect(e.getOfficeNumber()).toBe(testONumber);
});

test("Test role", () => {
  const testValue = "Manager";
  const e = new Manager("Tony", 5, "email@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});