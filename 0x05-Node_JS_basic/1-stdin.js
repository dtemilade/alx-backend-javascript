process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const retval = process.stdin.read();
  if (retval !== null) {
    process.stdout.write(`Your name is: ${retval}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
