const mongoose=require( 'mongoose');

 const ATLAS_URL = process.env.MONGO_URI;
 module.exports = async function mongooseConnect(){
    await mongoose.connect(ATLAS_URL, { useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> {
        console.log(`${process.env.MONGO_DB} database connection established successfully`);
    })
    .catch(err=> console.log(err));
}

module.export = ATLAS_URL;