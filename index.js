// const express =require("express");
// const cors = require('cors');
// require('dotenv').config();
// const app=express();
// const {generate} = require('./router/generate'); 
// const {send} = require('./router/send'); 

// app.use(express.json());
// app.use(cors());


// app.use('/generate', generate);
// app.use('/send',send)


// let port=process.env.PORT

// app.listen(port,()=>{
//     console.log("Server Running")
// })
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { generate } = require('./router/generate');
const { send } = require('./router/send');

app.use(express.json());
app.use(cors());

app.use('/generate', generate);
app.use('/send', send);

// Cluster logic
if (cluster.isMaster) {
  // Create worker processes
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Optionally, restart the worker
    cluster.fork();
  });
} else {
  // Worker process logic
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Worker ${process.pid} active `);
  });
}
