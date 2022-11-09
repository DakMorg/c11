const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/* require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app); */

app.use(require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'))

app.listen(PORT, function() {
  console.log(`Server listening on PORT: ${PORT}`);
});