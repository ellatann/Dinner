// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const DinnerSchema = new Schema({
    day:{
        type: String,
    },
    meal:{
        type: String,
        enum: ["regular","vegitarian","vegan","gluten-free"],
        default: "regular",
    },
    main:{
        type: String,
        enum: ["chicken","beef","pork","tofu"],
        default:"chicken",
    },

    side: {
        type: String,
        enum: ["potatoes","salad","veggies","fries"],
        default:"veggies",
    },
});


module.exports = mongoose.model("Dinner", DinnerSchema);
