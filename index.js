import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/", TasksController.get);
app.post("/prompts", TasksController.prompts);

const port =  process.env.PORT;
  
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${process.env.port}`)
})

