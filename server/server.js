import express from 'express';
import giftsRoute from './routes/gifts.js';


const app = express()

// Serve static files from public directories
app.use('/public', express.static('../client/public'))
app.use('/scripts', express.static('../client/public/scripts'))

// Use the gifts route
app.use('/api', giftsRoute);

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Start the server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
