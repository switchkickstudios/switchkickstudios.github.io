const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();


router.get('/',function(req,res) {
    res.render(path.join(__dirname+'/index'))
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/', router);
app.listen(process.env.PORT || 3000);
