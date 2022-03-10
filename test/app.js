const app = require('..app');

test('Should equal 5 when passed 2 and 3', () =>{
    expect(app.add(2,3)).toBe(5);
});

it("should include the name Dave", () =>{
    expect(app.myArray).toContain("Dave")
})