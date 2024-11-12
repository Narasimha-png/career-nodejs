import express from 'express' ;
import dotenv from 'dotenv' ;
import cors from 'cors' ;
import multer from 'multer';
import jobPosting from './routes/jobPosting.js';
import pool from './config/pool.js'

const App = express() ;

const storage = multer.memoryStorage() ;
const upload = multer({storage:storage}) ;

const corsOptions = {
    origin:true , 
    methods:'GET , HEAD , PATCH , POST , DELETE ' , 
    Credential:true 
}
App.use(cors(corsOptions)) ;
dotenv.config() ;

App.use(express.json()) ;

App.use('/apis/v1/carreer', jobPosting ) 

const PORT = process.env.PORT|| 3000  ;

App.listen(PORT, ()=>{
    console.log("localhost:" + PORT) ;
}) ;

