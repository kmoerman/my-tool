const fs = require('fs/promises')

const file = process.env.INPUT_FILE

if (process.env.INPUT_DEPENDENCIES === 'true') {
  // import dummy dependency lodash
  const _ = require('lodash')
  console.log(`My tool with dependency lodash:${_.VERSION}; processing ${file}`)

}
else {
  console.log(`My tool without dependency; processing ${file}`)
}

fs.readFile(file)
  .then( data => console.log(data.toString())
       , err  => { process.exitCode = 1; console.error(err) }
       )
