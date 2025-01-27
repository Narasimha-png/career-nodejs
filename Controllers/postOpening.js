import insertPosting from "../config/insertPosting.js";

console.log("POSTING") ;

const postOpening = async(req , res) =>{
    await insertPosting(req.body).then(()=>{
        console.log("Inserted Successfully") ;
        res.status(200).send(
           " Inserted Successfully") ;
    })
   
}

export default postOpening ;