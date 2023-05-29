const mongoose = require('mongoose')

const { PROYECTO_HOST, PROYECTO_DB } = process.env;
const MONGODB_URI = 'mongodb+srv://a329762:QRVRu2QCxlOtDvMi@proyectodb.j7na8vg.mongodb.net/'; // 
// 'mongodb+srv://a329762:QRVRu2QCxlOtDvMi@proyectodb.j7na8vg.mongodb.net/'
// 'mongodb://127.0.0.1:27017/libreria'
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useCreateIndex: true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));