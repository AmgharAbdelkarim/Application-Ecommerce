const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


let db ;
const mongoConnect = callback => {
  const client = new MongoClient('mongodb+srv://amghar_abdelkarim:amghar1234@cluster0-v98lb.mongodb.net/shop?retryWrites=true&w=majority',
  { useNewUrlParser: true , useUnifiedTopology: true})
  client.connect()
    .then(client => {
      console.log('Connected!');
      db = client.db()
      callback(db);
    })
    .catch(err => {
      console.log(err);
    });
};
const getDb =()=>{
  if(db){
    return db
  }
  throw 'db not found'

}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb ;




