const { response } = require("express");
const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
    const first = parseInt(req.query.first);
    const second = parseInt(req.query.second);
    const sum = first + second;
    res.json({ sum: sum});
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const first = parseInt(req.params.first);
    const second = parseInt(req.params.second);
    const mult = first * second;
    res.json({ mult: mult });
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));