const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res) {
    res.render(path.join(__dirname+'/partials/index'))
});
router.get("/magicdeckmate", (req, res) => {
    res.render(path.join(__dirname+'/partials/magicdeckmate'));
});
router.get("/kickticker", (req, res) => {
    res.render(path.join(__dirname+'/partials/kickticker'));
});

app.use('/dist',express.static(path.join(__dirname+'/dist')));
app.use('/images',express.static(path.join(__dirname+'/images')));
app.use('/fonts',express.static(path.join(__dirname+'/fonts')));
app.set('view engine', 'ejs');

app.use('/', router);
app.listen(process.env.PORT || 3000);
