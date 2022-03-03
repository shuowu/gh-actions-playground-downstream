const fs = require('fs');
fs.mkdirSync('./pr');
fs.writeFileSync('./pr/context', JSON.stringify({ a: 1 }));

// github.rest.repos.merge({
//   owner: context.repo.owner,
//   repo: context.repo.repo,
//   base: 'main',
//   head: 'update-samples-generated'
// });
