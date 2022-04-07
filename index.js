const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;



const initServer = async () => {
  app.use('/', express.static(__dirname));
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  console.log("init server")
}

initServer().catch(err => {
    console.log(err);
})
  
