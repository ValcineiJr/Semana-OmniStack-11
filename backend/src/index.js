const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

//cors limita quais aplicações front end podem acessar meu backend
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
