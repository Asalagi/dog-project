
const pool = require('.././config/dog-config');

const getDogs = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM dogs ORDER BY id ASC', (error, results) => {
          if (error) {
            reject(error);
          } else {
          resolve(results.rows);
        }
    });
 });
};

module.exports = {
    getDogs,
};
