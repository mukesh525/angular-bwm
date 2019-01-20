const express = require ('express');
const mongoose = require('mongoose');
const config =require('./config');

const  userRoutes = require('./routes/users'),
       bookingRoutes = require('./routes/bookings'),
       rentalRoutes = require('./routes/rentals');
      
     
const FakeDb = require('./fake-db');

const path = require('path');

mongoose.connect(config.DB_URI,{ useNewUrlParser: true }).then(()=>{
    if (process.env.NODE_ENV !== 'production') {
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
      }
 });

const Rental = require('./models/rental');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT||3001;

app.use(bodyParser.json());
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/bookings',bookingRoutes);

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist/bmw-angular');
    app.use(express.static(appPath));
  
    app.get('*', function(req, res) {
      res.sendFile(path.resolve(appPath, 'index.html'));
    });
}
  


app.listen(PORT,function(){
    console.log('I m running '+PORT)
})

