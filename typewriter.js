const sentence = "hello there from lighthouse labs";

let  letter = 0;

for (const char of sentence) {
  // increases the letter count 
  letter ++
  // an example of asynchronous programming| delays output by X amount of times 
  setTimeout(() => {
    // process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time
    process.stdout.write(char);
// increases each letter by 50 ms
  }, 50 * letter) 

  
}
