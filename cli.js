#!/usr/bin/env node

var version = require('./package').version;
var program = require('commander');
var shimly = require('./');

function list(val) {
  return val.split(',');
}

program
  .version(version)
  .option('-m, --minify', 'Minify')
  .option('-s, --shims <items>', 'Add the specified shims, comma separted', list)
  .option('-o, --output [value]', 'Output file')
  .parse(process.argv);

if (program.shims) {
  var results = shimly.shim(program.shims, program.minify, program.output);

  process.stdout.write(results);
  process.exit();
}