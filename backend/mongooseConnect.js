// import mongoose from 'mongoose';

// export const ATLAS_URL = process.env.MONGO_URI; // setting the uri to appropriate.

// export const mongooseConnect = async () => {
//     await mongoose
//         .connect("mongodb://127.0.0.1:27017/db1", { useUnifiedTopology: true, useCreateIndex: true })
//         .then(() => {
//             console.log(
//                 `${process.env.MONGO_DB} database connection established successfully`
//             );
//         })
//         .catch(err => console.log(err));
// };


const MongoClient = require('mongodb').MongoClient;
// Connect URL


export const ATLAS_URL = process.env.MONGO_URI; // setting the uri to appropriate.

export const mongooseConnect = () => {
    const url = 'mongodb://127.0.0.1:27017/db1';

    // Connec to MongoDB
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            return console.log(err);
        }
    //     client
    //   .connect()
    //   .then(
    //     client =>
    //       client
    //         .db('db1')
    //         .listCollections()
    //         .toArray() // Returns a promise that will resolve to the list of the collections
    //   )
    //   .then(cols => console.log("Collections", cols))
    //   .finally(() => client.close());
      client
      .connect()
      .then(
        client =>
          client
            .db('db1')
            .admin.find()
      )
      .then(cols => console.log("Collections", cols))
      .finally(() => client.close());
        console.log(`MongoDB Connected: ${url}`);
    });
};