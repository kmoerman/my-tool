if (process.env.INPUT_DEPENDENCIES === 'true') {
  const _ = require('lodash')
  console.log(`My tool with dependency lodash:${_.VERSION}; processing ${process.env.INPUT_FILE}`)
}
else {
  console.log(`My tool without dependency; processing ${process.env.INPUT_FILE}`)
}
