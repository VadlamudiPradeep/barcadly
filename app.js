const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', productRoutes);
app.use('/GetProducts', productRoutes)
app.use('/SignUp', authRoutes);
app.use('/SignIn', authRoutes);

app.use('/postCart', cartRoutes)
app.use('/getCart' , cartRoutes)
app.use('/postCart', cartRoutes);
const port = process.env.PORT
sequelize
//.sync({force:true})
.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Error starting server:', err);
    });
