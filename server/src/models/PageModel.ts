const mongoose = require("mongoose");

const PageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },

});

// create the model and export
const PageModel = mongoose.model('Page',PageSchema);
export default PageModel;