import pool from "../config/pool.js";

const getallOpenings = (req , res ) =>{
    return new Promise((revoke , resolve)=>{
        pool.query("select * from openpostings" , (result , err)=>{
            if(result)
                resolve(result) ;
            else
            revoke(err) ;
        })
    }).then((result)=>{
        res.status(200).send(result) ;
    }).catch((err)=>{
        res.status(400).send(err) ;
    })
}

export default getallOpenings ;
