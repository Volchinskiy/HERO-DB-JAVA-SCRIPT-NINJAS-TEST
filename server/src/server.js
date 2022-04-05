import express from "express";
import mongoose from "mongoose";
import heroRouter from "./routers/router.js";
import cors from "cors";
const app = express();

const PORT = 5000;
const DB_URL = "mongodb+srv://maxim2:CEctPgAabYAEfMHc@cluster0.wdeed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(express.json());
app.use("/api", heroRouter);
app.use(cors());

async function startApp() {
  try{
    await mongoose.connect(DB_URL);
    console.log("Connect to MongoDB")
    app.listen(PORT, () => console.log(`Server working on http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
startApp ();

