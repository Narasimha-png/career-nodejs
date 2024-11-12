import express from "express" ;
import postOpening from "../Controllers/postOpening.js" ;
import getallOpenings from "../Controllers/getallOpenings.js";
import jobDetails from "../Controllers/jobDetails.js";

const jobPosting = express.Router() ;

jobPosting.post('/postopening', postOpening )  ;

jobPosting.get('/getallopenings' , getallOpenings ) ;

jobPosting.get('/jobDetails/:id' , jobDetails ) ;

console.log("JobRoutes") ;
export default jobPosting ;