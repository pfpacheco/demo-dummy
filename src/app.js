import ejs from "ejs";
import compression from "compression";
import dotenv from "dotenv";
import express, {json} from "express";
import Cors from "cors";
import router from "./route/routes.js";
import mongoose from "mongoose";

dotenv.config()

const app = express();

const servername = process.env.SERVERNAME_ENV;
const serverport = process.env.SERVERPORT_ENV;

app.use(Cors());
app.use(compression());
app.use(json());
app.use(router);

app.engine("html", ejs.renderFile);
app.set("views engine", "html");
app.use(express.static("views",));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(serverport, () => {
        console.log(`Server is running on host: ${servername}@port: ${serverport}`);
    });
}).catch((err) => console.error('Error connecting to MongoDB:', err));
