const express = require ('express');
const mongoose = require('mongoose');
const config =require('./config/dev');

const  userRoutes = require('./routes/users'),
       bookingRoutes = require('./routes/bookings'),
       rentalRoutes = require('./routes/rentals');
      
     
const FakeDb = require('./fake-db');

mongoose.connect(config.DB_URI,{ useNewUrlParser: true }).then(()=>{
    const fakeDb= new FakeDb();
     //fakeDb.seedDb();
   }).catch((e)=>{
     console.log(e)
 });

const Rental = require('./models/rental');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT||3001;

app.use(bodyParser.json());
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/bookings',bookingRoutes);

app.listen(PORT,function(){
    console.log('I m running '+PORT)
})

