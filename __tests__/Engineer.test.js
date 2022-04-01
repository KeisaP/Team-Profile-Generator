const Engineer = require("../lib/Engineer");

test("Set github", () => {
  const testGithub = "Githubid";
  const e = new Engineer("Tony", 5, "email@test.com", testGithub);
  expect(e.github).toBe(testGithub);
});

test("Returns github id", () => {
  const testGithub = "Githubid";
  const e = new Engineer("Tony", 5, "email@test.com", testGithub);
  expect(e.getGithub()).toBe(testGithub);
});

test("Test role", () => {
  const testValue = "Engineer";
  const e = new Engineer("Tony", 5, "email@test.com", "Githubid");
  expect(e.getRole()).toBe(testValue);
});