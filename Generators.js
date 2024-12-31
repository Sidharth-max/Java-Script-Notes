/*A generator is a special type of function that can be paused and resumed. It is defined using the 
function* syntax, and the yield keyword is used to pause the function and return a value. Each time the generator's 
next() method is called, the function resumes from where it was paused.

Advantages of Generators
Memory Efficiency: They produce values on demand, meaning they don't need to hold all values in memory.
Asynchronous Programming: They can be used to simplify async code by allowing the function to pause and resume.
Readable Code: Generators help break down code into smaller, manageable chunks instead of nested callbacks or promises.*/


function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const ge = simpleGenerator();
console.log(ge.next().value); // 1
console.log(ge.next().value); // 2
console.log(ge.next().value); // 3




function* countDown(from) {
  while (from > 0) {
    yield from--;
  }
}

const countdown = countDown(3);
console.log(countdown.next().value); // 3
console.log(countdown.next().value); // 2
console.log(countdown.next().value); // 1




function* generatorWithReturn() {
  yield 1;
  yield 2;
  return 3;
}

const g2 = generatorWithReturn();
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().done);  // true





function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2





function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1();
  yield 3;
}

const gen = gen2();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
