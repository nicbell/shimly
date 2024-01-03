var shimly = require('../index.js')

shimly.shim(['Array.every', 'Array.forEach'], false, 'shims.js');
