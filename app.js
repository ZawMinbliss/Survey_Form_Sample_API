const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3300, () => console.log(" Alive on 3300"));
