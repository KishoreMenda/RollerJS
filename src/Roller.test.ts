import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

// describe("Roller tests", ()=> {
//   test("Description", () => {
//   });
// });



describe("Roller tests", ()=> {
// test cases for the constructors
// The first test case checks if the number of faces is set to 6 when the parameter is undefined.
// The second test case checks if the number of faces is set to 6 when the parameter is less than 2.
// The third test case checks if the number of faces is set to the given value when the parameter is greater than or equal to 2.
  test("Should set number of faces to 6 when faces is undefined", () => {
    const roller = new Roller(undefined);
    expect(roller['_faces']).toEqual(6);
  });

  test("Should set number of faces to 6 when faces is less than 2", () => {
    const roller = new Roller(1);
    expect(roller['_faces']).toEqual(6);
  });

  test("Should set number of faces to the given value when faces is greater than or equal to 2", () => {
    const roller = new Roller(4);
    expect(roller['_faces']).toEqual(4);
  });

//The first test case checks that rolling a valid number updates the last roll and distribution as expected. 
//The second test case checks that rolling an invalid number does not update the last roll or distribution.
// test("Rolling a valid number updates last roll and distribution", () => {
//   const roller = new Roller(6);
//   expect(roller.roll(3)).toBe(3);
//   expect(roller.last()).toBe(3);
//   expect(roller.distribution().get(3)).toBe(1);
// });

test("Rolling an invalid number does not update last roll or distribution", () => {
  const roller = new Roller(6);
  expect(roller.roll(7)).toBe(0);
  expect(roller.last()).toBe(0);
  expect(roller.distribution().get(7)).toBeUndefined();
});


//The first test case checks that the function returns 0 if no rolls have been made yet. 
//The second test case checks that the function returns the value of the last roll, which should be 6 in this case since the roller was rolled twice and the last roll was a 6.
test("returns 0 if no rolls have been made", () => {
  const roller = new Roller(6);
  expect(roller.last()).toBe(0);
});

test("returns the value of the last roll", () => {
  const roller = new Roller(6);
  roller.roll(3);
  roller.roll(6);
  expect(roller.last()).toBe(6);
});

//This test creates a new Roller object with 6 faces and rolls the die a few times with different values. 
//Then it calls the distribution method to get the current distribution map and checks if it has the

test("distribution() returns correct distribution map", () => {
  const roller = new Roller(6);
  roller.roll(1);
  roller.roll(1);
  roller.roll(2);
  roller.roll(3);
  roller.roll(3);
  roller.roll(3);
  const distribution = roller.distribution();
  expect(distribution.size).toBe(6);
  expect(distribution.get(1)).toBe(2);
  expect(distribution.get(2)).toBe(1);
  expect(distribution.get(3)).toBe(3);
  expect(distribution.get(4)).toBe(0);
  expect(distribution.get(5)).toBe(0);
  expect(distribution.get(6)).toBe(0);
});


});


