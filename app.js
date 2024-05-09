const express = require('express');

const restaurantesRoutes = require('./routes/restaurantes-routes');

const app = express();

app.use('/api/restaurantes', restaurantesRoutes);


app.listen(3000);

