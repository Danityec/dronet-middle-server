const express = require('express');
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000;

app.use(cors({origin: true, credentials: true}))
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const {remoteRouter} = require("./routers/routers");

app.use('/api/remoteControl', remoteRouter);

app.use((req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));