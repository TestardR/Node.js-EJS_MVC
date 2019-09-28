const path = require('path');

const express = require('express');

// const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/404');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  console.log('I always run');
  next();
});

app.use(errorController.get404);

app.listen(3000);
