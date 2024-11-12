import pool from "../config/pool.js";

const jobDetails = async(req, res)=>{
    const {id} = req.params ;
    return new Promise((revoke , resolve)=>{
        pool.query("select * from openpostings where id=" + id , (result , err)=>{
            if(err)
                revoke(err ) ;
            else
            resolve(result) ;
        }) 
    }).then((result)=>{
        res.status(200).send(result) ;
    }).catch((err)=>{
        res.status(400).send("Error : " + err ) ;
    })

}
export default jobDetails ;