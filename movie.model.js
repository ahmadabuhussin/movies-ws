const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    year: { type: Number, required: true },
    length: { type: Number, required: true },
    genre: { type: String, required: true, max: 100 },
    director: { type: String, required: true, max: 100 }
});

// Export the model
module.exports = mongoose.model('Movie', MovieSchema);