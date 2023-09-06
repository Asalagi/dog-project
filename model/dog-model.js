
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

const getDogById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM dogs WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows[0]);
      }
    });
  });
};

const createDogs = (body) => {
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

const updateDogs = (id, updateDogInfo) => {
  const { name, breed, color, sex, birthday } = updateDogInfo;

  return new Promise((resolve, reject) => {
    pool.query ('UPDATE dogs SET name = $1, breed = $2, color = $3, sex = $4, birthday = $5 WHERE id = $6 RETURNING *',
    [name, breed, color, sex, birthday, id],
    (error, results) => {
      if (error) {
        console.error(error.message);
        reject(error);
      } else {
        resolve(results.rows[0]);
      }
    });
  });
};

const deleteDogs = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM dogs WHERE id = $1 RETURNING *', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if(results.rowCount === 0) {
          resolve(null);
        } else {
          resolve(results.rows[0]);
        }
      }
    });
  });
};

module.exports = {
    getDogs,
    getDogById,
    createDogs,
    updateDogs,
    deleteDogs,
};
