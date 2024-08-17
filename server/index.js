const express = require('express');
const app = express()
app.get('/',(req,res)=>res.json({message: 'hello'}))
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);