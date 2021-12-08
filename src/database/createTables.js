const Models = require('../models');
const createTables = () => {
    const models = Object.keys(Models);

    models.forEach(model => {
        Models[model].init();
    })

    return;
}
createTables();