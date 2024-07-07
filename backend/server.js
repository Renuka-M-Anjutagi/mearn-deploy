
import express  from 'express';
import dotenv from 'dotenv';
const app = express();
import morgan  from 'morgan';
import connectDb from './db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}

dotenv.config()
app.use(cors(corsOptions))
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use('/api/v1/auth', authRoutes);
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