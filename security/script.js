const bcrypt = require('bcrypt-nodejs');

bcrypt.hash('soup', null, null, function(err, hash) {
  console.log(hash)
})

bcrypt.compare('soup', '$2a$10$q1OkVbzXzEBhCP0ynCO7Weiv4zcrqJqrz6fj9XQmTuVjfeb5xYlde', function(err, res) {
  console.log(res)
})


