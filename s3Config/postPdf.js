import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"; 
import {getSignedUrl} from "@aws-sdk/s3-request-presigner" ;
import dotenv from "dotenv" ;
dotenv.config() ;

const client = new S3Client({
    region:"eu-north-1",
    credentials:{
        accessKeyId:process.env.ACCESS_KEY ,
        secretAccessKey: process.env.SECRET_KEY,
    },
 }) ;
 
export async function getObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket:process.env.BUCKET ,
        Key:key ,
        ContentType: "application/pdf",
    }) ;
    const url = await getSignedUrl(client , command ) ;
    return url ;
 }

 export async function putObjectURL(file, key) {
   
        const uniqueKey = file.name;
    const command = new PutObjectCommand({
        Bucket: process.env.BUCKET,
        Key: uniqueKey,
        Body: file.data,  
        ContentType: "application/pdf"
    });
    
    try {
        const data = await client.send(command);
        console.log("Upload successful:", data);
        return data;
    } catch (error) {
        console.error("File upload failed:", error);
        throw error;
    }
}


 async function getUrl() {
   // console.log("URL " , await getObjectURL("Interstellar Poster.jpg")) ;
   console.log("url" , await putObjectURL("demo.pdf"))
 }


 


