const {MongoClient}= require("mongodb");
const url  = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database  = 'Restart';


const getConnect = async()=>{
    let result = await client.connect();
    let db  = await result.db(database);
    return db.collection('restart')
}
module.exports = getConnect;