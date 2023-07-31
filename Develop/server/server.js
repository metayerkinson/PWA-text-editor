const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link routes
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Server Now listening on port: ${PORT}`));
