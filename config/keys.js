if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys.prod')
} else {
    module.exports = require('./keys.dev')
}




// module.exports = {
//     mongoURI: 'mongodb+srv://dextermd:zulimp33@cluster0.laatd.mongodb.net/alexdb?retryWrites=true&w=majority',
//     jsonwebtoken: 'dev-jwt'
// }
