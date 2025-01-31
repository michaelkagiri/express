import express from "express";
import { workingHours } from "./middleware/timeCheck.js";
import { router } from "./routes/index.js";


import expressEjsLayouts from "express-ejs-layouts";

const app = express();

const PORT = 3000;
// const PORT = process.env.PORT;

app.set("view engine", "ejs");

app.use(expressEjsLayouts);

app.set('layout','layout');

app.use(express.static("views"));

app.use(workingHours);

app.use("/", router);

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));