import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"; 
import {getSignedUrl} from "@aws-sdk/s3-request-presigner" ;
import dotenv from "dotenv" ;
dotenv.config() ;

const client = new S3Client({
    region:"ap-south-1",
    credentials:{
        accessKeyId:process.env.ACCESS_KEY ,
        secretAccessKey: process.env.SECRET_KEY,
    },
 }) ;
 
export async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket:process.env.BUCKET ,
        Key:key 
    }) ;
    const url = await getSignedUrl(client , command ) ;
    return url ;
 }

export async function putObjectURL(){
    const command = new PutObjectCommand({
        
        Bucket: process.env.BUCKET ,
             
    })
    const url = await getSignedUrl(client , command) ;
    return url ;


}

 async function getUrl() {
   // console.log("URL " , await getObjectURL("Interstellar Poster.jpg")) ;
   console.log("url" , await putObjectURL())
 }

 


