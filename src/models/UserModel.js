const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema =  mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};

const User = mongoose.model('User', UserSchema);

function UserModel(){}

UserModel.prototype.registerUser = function(req, res, Dados){
    newUser = new User(Dados);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
        if(err){
            return res.status(400).send({
                message: err
            })
        }else{
            user.hashpassword = undefined;
            res.json(user)
        }
    })
}

module.exports = function(){
    return UserModel;
};