const fs = require('fs');
fs.mkdirSync('./pr');
fs.writeFileSync('./pr/context', JSON.stringify({ a: 1 }));