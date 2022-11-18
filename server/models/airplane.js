let mongoose = require('mongoose');
//create a airplanes model
let airplaneModel = mongoose.Schema({
    name: String, 
    type: String, 
    manufacturer: String, 
    cost: Number
    },
    {
        collection: 'airplanes'
    }
);

module.exports = mongoose.model('Airplane', airplaneModel);
