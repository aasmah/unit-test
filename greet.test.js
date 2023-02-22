// jest.mock('./greet');
// connects ./greet  to jest testing
const greet = require('./greet');


//test for a single person
test('Should greet a single person', () => {
    expect(greet('Lizzy')).toBe('Hello Lizzy!');
});
//test for a shout back all caps return
test('Should shout back when name is in caps', function() {
    expect(greet('ABE')).toBe('HELLO ABE!');
});
//return hello there! for null
test('Should handle null', () => {
    expect(greet(null)).toBe('Hello there!');
});
// return all the elements of array
test('should returns all the elements of array', () => {
    expect(greet(['Maryam', 'Ateeb'])).toBe('Hello, Maryam, Ateeb');
});
//return longer length of array, all names must be greeted
test('should returns all the elements of array', () => {
    expect(greet(['Maryam', 'Ateeb', 'Aarib', 'friends', 'huma', 'shuma'])).toBe('Hello, Maryam, Ateeb, Aarib, friends, huma, shuma');
});