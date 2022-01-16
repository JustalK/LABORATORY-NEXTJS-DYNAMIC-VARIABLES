// Import packages.
const express = require('express')

// Create and configure a webserver.
const app = express()
app.use(express.json())


// Create a test endpoint
app.get('/', async (req, res) => {
  res.status(200).send({ from: 'Server2', name: 'Justal Kevin' });
})

// Start the webserver.
app.listen(3000, () => {
    console.log('Server 2 is up on port 3000')
})
