const mongoose = require('mongoose')
const db=process.env.MONGO_URI;


const dbConnect =  async()=>
{
    try{
        await mongoose.connect(db)
        console.log('connected to database')

    }
    catch(error)
    {
       console.log('error while connecting database',error)
    }
}
module.exports=dbConnect;
