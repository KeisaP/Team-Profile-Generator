const manager = require('../lib/manager');

Describe('manager render script', () => {
  it("retrieves a manager object", () => {
      const Manager = new manager('Shelle', 3, 'email', '15');
      expect(Manager.officeNumber).toEqual(expect.any(Number));
  });
  it("retrieves a GitHub username", () => {
      const Manager = new manager('Shelle', 3, 'email', '15');
      expect(Manager.getofficeNum()).toBe(15);
  });
  it('retrieves the role', () => {
      const Manager = new manager('Shelle', 3, 'email', 'shellejones');
      expect(Manager.getRole()).toBe('Manager');
  });
});S