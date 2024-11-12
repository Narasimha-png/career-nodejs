import mysql from 'mysql2';
import fs, { copyFileSync } from 'fs' ;
import path from 'path' ;
import { fileURLToPath } from 'url';

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "catalog",
    password: "catalog@123",
    database: "career",
    connectionLimit: 10
});

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);


const filepath =  path.resolve(__dirname, "../sqltriggers/generateId.sql");


const idTrigger = new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filepath, 'utf-8');
    resolve(fileContent);
}).then((content) => {
   pool.query("DROP TRIGGER IF EXISTS before_insert_openings;" , (err , result)=>{
    if( err ){
        console.log("ERROR TO REGISTER TRIGGER") ;
    }
    else{
        pool.query(content, (err, results) => {
            if (err) {
                console.error("Error in creation:", err);
                return;
            }
            console.log("Trigger created successfully:", results);
        });
    }
   })
    
}).catch((err) => {
    console.error("Error reading trigger file:", err);
});




export default pool;
