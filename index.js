import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import OpenAI from 'openai';



const openai = new OpenAI(process.env.OPENAI_API_KEY);
const app = express();
const dotenv=dotenv.config();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());

app.get("/", TasksController.getList);
app.get("/:id", TasksController.getById);
app.post("/", TasksController.add);
app.put("/:id", TasksController.update);
app.delete("/:id", TasksController.delete);

  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on http://localhost:${process.env.PORT}`)
})

