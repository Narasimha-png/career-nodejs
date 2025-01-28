import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jobPosting from './routes/jobPosting.js';
import pool from './config/pool.js';
import fileUpload from 'express-fileupload';
import { putObjectURL } from './s3Config/postPdf.js';

const App = express();
dotenv.config();

App.use(fileUpload());

const corsOptions = {
    origin: 'https://careercatalog.netlify.app/', 
    credentials: true,               
  };

App.use(cors(corsOptions)) ;

App.use(express.json());


App.post("/api/v1/:id/postform", async (req, res) => {
    console.log("Request body:", req.body);
    console.log("Request files:", req.files);
    const id = req.params.id ;
    const path =  req.params.id + "/" + req.body.gmail  ;
    if (!req.files || !req.files.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }
    const { file } = req.files;
    try {
        const data = await putObjectURL(file, path );
        console.log("Upload data:", data);
        res.send({ message: "File uploaded successfully", data });
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).send({ message: 'File upload failed', error });
    }

    

});

App.use('/apis/v1/carreer', jobPosting);

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
});
