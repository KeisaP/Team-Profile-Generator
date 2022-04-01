const Intern = require("../lib/Intern");

test("Set school", () => {
  const testSchool = "School University";
  const e = new Intern("Tony", 5, "emailt@test.com", testSchool);
  expect(e.school).toBe(testSchool);
});

test("Get school using getSchool", () => {
  const testSchool = "School University";
  const e = new Intern("Tony", 5, "email@test.com", testSchool);
  expect(e.getSchool()).toBe(testSchool);
});

test("Test role", () => {
  const testSchool = "Intern";
  const e = new Intern("Tony", 5, "email@test.com", "School University");
  expect(e.getRole()).toBe(testSchool);
});