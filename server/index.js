const express = require ('express');
const mongoose = require('mongoose');
const config =require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI,{ useNewUrlParser: true }).then(()=>{

    const fakeDb= new FakeDb();
    fakeDb.seedDb();
  }).catch((e)=>{
    console.log(e)
});
const app = express();
const PORT = process.env.PORT||3001;

app.use(bodyParser.json());
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users',userRoutes);

app.listen(PORT,function(){
    console.log('I m running '+PORT)
})

