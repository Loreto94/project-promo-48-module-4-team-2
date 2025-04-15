const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const port = 5001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));