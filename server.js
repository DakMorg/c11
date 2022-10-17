const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
  console.log(`Server listening on PORT: ${PORT}`);
});