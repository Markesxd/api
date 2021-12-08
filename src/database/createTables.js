const Models = require('../models');
const db = require('./connection');
const createTables = async() => {
  const models = Object.keys(Models);

  models.forEach(async (model) => {
    await Models[model].init();
  });
};
async function main(){
  try {
    await createTables();
  } catch (error) {
    console.log(error);
  }
}
main();