const express = require('express')
const app = express();
const path = require('path');
const router = express.Router();
const { fullpageJSLicense } = require('./config');

router.get('/',function(req,res) {
    res.render(path.join(__dirname+'/partials/index'), { fullpageJSLicense });
});
router.get("/magicdeckmate", (req, res) => {
    res.render(path.join(__dirname+'/partials/magicdeckmate'), { fullpageJSLicense });
});
router.get("/kickticker", (req, res) => {
    res.render(path.join(__dirname+'/partials/kickticker'), { fullpageJSLicense });
});
router.get("/kicktickerprivacypolicy", (req, res) => {
    res.render(path.join(__dirname+'/partials/kicktickerprivacypolicy'));
});

app.use('/favicon.png',express.static(path.join(__dirname+'/favicon.png')));
app.use('/dist',express.static(path.join(__dirname+'/dist')));
app.use('/images',express.static(path.join(__dirname+'/images')));
app.use('/fonts',express.static(path.join(__dirname+'/fonts')));
app.set('view engine', 'ejs');

app.use('/', router);
app.listen(process.env.PORT || 3000);
