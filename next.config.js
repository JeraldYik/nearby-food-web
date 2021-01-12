const path = require('path');
require('dotenv').config();

// TODO: fix styles
module.exports = {
  env: {
    GOOGLE_APIKEY: process.env.GOOGLE_APIKEY,
    BASE_URL: process.env.BASE_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
