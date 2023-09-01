
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

const createDogs = () => {
  const { name, breed, color, sex, birthday } = body;
  console.log('A new dog has been entered into the database:', body);
  
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO dogs (name, breed, color, sex, birthday) VALUES ($1, $2, $3, $4,$5) RETURNING *', 
    [name, breed, color, sex, birthday], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows[0]);
      }
    }); 
  });
};

module.exports = {
    getDogs,
    createDogs,
};
