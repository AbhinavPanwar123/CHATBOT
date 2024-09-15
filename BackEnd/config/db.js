const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CHATBOT').then(() =>{
    console.log('MongoDb is connected')
}).catch((err) =>{
    console.log('MongoDb connection Error',`${err}`.green)
})
