const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // Autres champs et méthodes si nécessaire
});


userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }   
    next();
})
// Fonction pour vérifier si l'utilisateur est un administrateur
/*userSchema.methods.isAdmin = function() {
    return this.userType === 'administrateur';
};

const User = mongoose.model('user', userSchema);*/


module.exports = mongoose.model('User', userSchema);
