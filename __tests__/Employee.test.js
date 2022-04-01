const Employee = require("../lib/Employee");

test("Can create employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Test name", () => {
  const name = "Tony";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Test ID", () => {
  const testEmployee = 5;
  const e = new Employee("NewE", testEmployee);
  expect(e.id).toBe(testEmployee);
});

test("Test email", () => {
  const testEmployee = "email@test.com";
  const e = new Employee("NewE", 1, testEmployee);
  expect(e.email).toBe(testEmployee);
});

test("Get name using getName", () => {
  const testEmployee = "Tony";
  const e = new Employee(testEmployee);
  expect(e.getName()).toBe(testEmployee);
});

test("Get ID using getId", () => {
  const testEmployee = 100;
  const e = new Employee("NewE", testEmployee);
  expect(e.getId()).toBe(testEmployee);
});

test("Get email using getEmail", () => {
  const testEmployee = "email@test.com";
  const e = new Employee("NewE", 1, testEmployee);
  expect(e.getEmail()).toBe(testEmployee);
});

test("Test role", () => {
  const testValue = "Employee";
  const e = new Employee("Tony", 5, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
