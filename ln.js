#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise

async function ln() {
    // Use 'await' in here
    // Your implementation here
    console.log(await fs.readFile(__filename, console.log))
}

ln()