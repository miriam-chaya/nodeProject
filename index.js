import express from 'express' 
import cors from "cors"
import bodyParser from "body-parser";
import TasksRouter from './Routers/TasksRouter';
import OpenAI from "openai";


const openai = new OpenAI({
    organization: "YOUR_ORG_ID",
    project: "$PROJECT_ID",
});

const app = express()
app.use(cors());
app.use(bodyParser.json());
const port = 3000

app.use('/tasks',TasksRouter);

  
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

