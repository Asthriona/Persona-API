const express = require('express');
const app = express();

const routes = require('./routes');
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Persona API!",
        endPoint: "/api"
    })
})
app.use("/api", routes);

app.listen(3000, console.log("App listening port 3000"))