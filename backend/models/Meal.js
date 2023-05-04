// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const MealSchema = new Schema({
    meal:{
        type: String,
    }
});


module.exports = mongoose.model("Meal", MealSchema);
