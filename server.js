const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000; //Use the PORT environment if set, or default to 3000
//Define route

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'intro.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
