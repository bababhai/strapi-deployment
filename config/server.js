const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// @ts-ignore
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});
