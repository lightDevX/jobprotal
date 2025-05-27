const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


// MongoDB connection details
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;

app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@job-portal.3nhhedq.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Middleware to handle CORS

const jobsCollection = client.db('jobPortal').collection('jobs');


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");



        app.get('/jobs', async (req, res) => {
            const query = {};
            const cursor = jobsCollection.find(query);
            const jobs = await cursor.toArray();
            res.send(jobs);
        });

        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const job = await jobsCollection.findOne(query);
            res.send(job);
        });

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});








