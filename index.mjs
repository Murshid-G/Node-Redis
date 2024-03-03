
//require = require('esm')(module /*, options*/);
import esm from 'esm';
import fetch from 'node-fetch';
import redis from 'redis';
import express from 'express';

const PORT = process.env.PORT || 5001;
// const REDIS_PORT = process.env.POST || 6379;

// const client = redis.createClient(REDIS_PORT);
// console.log('redis client----', client);
// const client = redis.createClient(REDIS_PORT,{
//     legacyMode: true
// });
const client = redis.createClient({
    legacyMode: true,
    PORT: 6379
  })
  client.connect().catch(console.error)

const app = express();

function setResponse(username, repos) {
    return `<h2>${username} has ${repos} github Repos</h2>`;
}

async function getRepos(req, res, next) {
    try {
        console.log('Fetching Data......');
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        const repos = data.public_repos;
        
        // Correct usage of Redis client method
        client.setex(username, 3600, repos.toString(), (err) => {
            if (err) {
                console.error('Error setting cache:', err);
            }
        });
        
        res.send(setResponse(username, repos));
    } catch (err) {
        console.error('Error fetching data from GitHub:', err);
        res.status(500).send('Internal Server Error');
    }
}

function cache(req, res, next) {
    const { username } = req.params;
    client.get(username, (err, data) => {
        if (err) {
            console.error('Error retrieving cache:', err);
            next(); // Proceed to fetch data if cache retrieval fails
        } else if (data !== null) {
            res.send(setResponse(username, data));
        } else {
            next(); // Proceed to fetch data if cache is empty
        }
    });
}

app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


