const os = require('os');
console.log(os.release());
console.log('memoria libre: ', os.freemem(), 'bytes');
console.log('memoria total: ', os.totalmem(), 'bytes');