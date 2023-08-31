
const pool = require('.././config/dog-config');

const getDogs = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM dogs ORDER BY id ASC', (error, result) => {
          if (error) {
            reject(error)
          }  
          resolve(resolve.rows);
        });
    });
};

module.exports = {
    getDogs,
}
