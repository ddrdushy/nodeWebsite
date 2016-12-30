var express = require('express');
var nodemailer=require('nodemailer');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res,next){
  var transpoter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '<Email ID>',
      pass: '<Password>'
    }
  });

  var mailOptions = {
    from: 'Website',
    to: 'dushy2009@gmail.com',
    subject: 'website submission',
    text: 'you have a new submission name: '+req.body.name+' Email: '+req.body.email+' message: '+req.body.message,
    html: '<p>you have a new submission..</p><ul><li>Name: '+req.body.name+'</li><li>Email:'+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  }

  transpoter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('message sent '+info.response);
      res.redirect('/');
    }
  });

});

module.exports = router;
