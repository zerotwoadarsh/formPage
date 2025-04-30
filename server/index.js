import express from "express"
import connectDB from './src/database/db.js';
import cors from "cors"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import FormPage from './src/database/models/formPage.models.js'; 


dotenv.config({
    path: './env'
})

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
    .then(() => {
        app.listen(PORT || 3001, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection error in src index", error);
    })

app.get('/test', (req, res) => {
    res.send('Hello World2')
})



app.post('/submit/formPage', async (req, res) => {
    try {
        const newEntry = new FormPage(req.body);
        const savedEntry = await newEntry.save(); 
        res.status(200).json(savedEntry);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'User has already submitted' });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
});

app.get('/entries/formPage', async (req, res) => {
    try {
      const entries = await FormPage.find();
      res.status(200).json(entries);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching entries' });
    }
  });