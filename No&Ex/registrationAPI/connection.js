const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "API";

async function getconnections(){
    let connection = await client.connect();
    let db = await connection.db(database);
    return db.collection('apis')
}

module.exports = getconnections;