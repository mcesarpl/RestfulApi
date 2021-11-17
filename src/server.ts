import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello world" });
});


console.log('Listening on port 3333...');
app.listen(3333);