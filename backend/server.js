
import express  from 'express';
import dotenv from 'dotenv';
const app = express();
import morgan  from 'morgan';
import connectDb from './db.js';
import authRoutes from './routes/authRoute.js';
//import proRoute from './routes/proRoute.js';
import productRoute from './routes/productRoute.js';
import cors from 'cors';


// middleware
const corsOptions = {
   // origin: "https://mearn-deploy.onrender.com/" // frontend URI (ReactJS)
     origin: "http://localhost:3000"
}

dotenv.config()



//routes
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth', authRoutes);
//app.use('/api/v1/auth', proRoute);
app.use('/api/v1/auth', productRoute);

connectDb();
app.get('/', (req, res) =>{
    res.send("<h1>welcome to my Application</h1> <h2>CRUD Application<h2>")
    // res.send({
    //     message: "welcome to my App"
    // })
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log('Applicatipn is running on port: ', PORT)
})

