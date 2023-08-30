const express = require("express");

const routes = require("./routes")

const app = express();

app.use(express.json())

app.use(routes)

// catch all

app.use((error,req,res) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})

const port = 2727;

app.listen(port, () => console.log(`Server is running on port:${port} 🙌`));
