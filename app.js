require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const {API_VERSION, PORT} = process.env;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/' + API_VERSION, [
    require('./server/routes/login_route'),
    require('./server/routes/issue_route'),
    require('./server/routes/statistic_route'),
    require('./server/routes/vote_route')
]);

app.listen(PORT, (err) => {
    if (err)
        console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});
