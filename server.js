const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');

//  Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`We are listening to you from port ${port}....`);
});
