require('dotenv').config();

const path = require('path');

// TODO: fix styles
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
