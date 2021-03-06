const mongoose = require( "mongoose" );
////----> importacion mongoose


const dbConnection = async () =>
{
    try 
    {
        await mongoose.connect( 

            process.env.DB_CONNECTION, 
            
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex : true
            }
        );

        console.log( "DB Online" );

    } 
    catch (error) 
    {
        console.log( error );  
        throw new Error( "error al inicializar la base de datos" );
    };
};

/////

module.exports = { dbConnection };