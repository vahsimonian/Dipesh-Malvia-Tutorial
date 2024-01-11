// REPL
// Read Evaluate Print Loop

const repl = require('repl');

const local = repl.start('$');

local.on('exit', () => {
  console.log('exting REPL');
  process.exit();
});
