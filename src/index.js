const express = require('express');
const { PORT } = require('./config');



const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  return res.status(200).json({"msg":"Hello"})

})

app.listen(PORT,()=>{
       console.log(`listening to port ${PORT}`)
})

