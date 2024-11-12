import pool from "./pool.js";

const insertPreparedStatement = 'insert into OpenPostings (name , number_of_openings , status ,skills, work_location, eligibility,compensation , imp_note , responsibilities) values (?, ? , ? , ? , ? , ?, ? , ? , ?) ' ;

const insertPosting = async ({name , number_of_openings , status ,skills, work_location, eligibility,
     compensation , imp_note , responsibilities} )=>{
    const skillsString = await JSON.stringify(skills) ;
    const insertQuery = [name , number_of_openings , status ,skillsString, work_location, eligibility,
        compensation , imp_note , responsibilities] ;
        console.log(insertQuery) ;
    return new Promise((revoke , resolve)=>{
        pool.query(insertPreparedStatement , insertQuery , (err , results)=>{
            if( err )
            revoke(err) ;
            else
            resolve("Inserted SuccessFulley") ;
        } ) ;
    }).catch((err)=>{
        console.log(err) ;
    })
   
}

export default insertPosting ;