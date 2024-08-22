const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data-association');
const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,  // post aik array hay of ides
        ref : 'post'         // model h post yeh btaya h 
    }]
})

module.exports = mongoose.model('user',userSchema);


