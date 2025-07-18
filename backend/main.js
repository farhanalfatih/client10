const express = require('express');
const app = express();
const usersRouter = require('./routes/order');
app.use(express.json());
app.use('/order', usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));