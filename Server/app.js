const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/user')
const mongoose = require('mongoose')

const errorController = require('./controllers/error');
var cors = require('cors')
 

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/users');

const auth = require('./middlewares/auth')


app.use((req,res,next)=>{
      User.findById('5f89ba7941af3523ebe99f49')
     .then(user=>{
         req.user = user //return a sequelize object so we can applied all sequelize methods destroy ...
         next()
      }).catch((err)=>{
          console.log(err)
    })
  })
    



app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);



mongoose.connect('mongodb+srv://amghar_abdelkarim:amghar1234@cluster0-v98lb.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
    poolSize: 5
  })
  .then((result) => {
    console.log("connected 5000")
    app.listen(5000)
  }).catch(err => console.log(err));







  
