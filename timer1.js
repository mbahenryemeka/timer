let timer1 = [10,3,5,15,9];
// sorting the array in ascending order
timer1.sort((a,b) => a -b);
for (let i = 0; i < timer1.length; i++) {
  if (timer1[i] > 0 && Number.isInteger(timer1[i])) {
    // convert the seconds into milliseconds.
    let delay = timer1[i] * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Timer at ${timer1[i]} seconds`);
    }, delay);
  }
}
