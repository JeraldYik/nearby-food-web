const path = require('path');
require('dotenv').config();

// TODO: fix styles
module.exports = {
  env: {
    GOOGLE_APIKEY: process.env.GOOGLE_APIKEY,
    BASE_URL: process.env.BASE_URL
  },
  // env: {
  //   GOOGLE_APIKEY: 'AIzaSyDZ-JBAYYubAKhgNYCnM4KBPcJnFohYLDo',
  //   BASE_URL: 'http://localhost:3000'
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
