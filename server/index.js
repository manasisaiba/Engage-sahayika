import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const IndividualRoute = require('./routes/Individual.js')
const CompanyRoute = require('./routes/Comppany')


app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))
app.use(cors());

app.use('/api/Individual', IndividualRoute)
app.use('/api/Ngo', CompanyRoute)

const PORT =process.env.PORT ||5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);
