const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

const mongo_uri = 'mongodb+srv://Vladyslav:<ваш пароль>@cluster0.bqbfotd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Сюда вставляйте свою url бази даних

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});

app.post('/api/create_user', async (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    try {
        const client = new MongoClient(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db();

        const usersCollection = db.collection('users');

        const existingUser = await usersCollection.findOne({ $or: [{ username: newUser.username }, { email: newUser.email }] });
        if (existingUser) {
            client.close();
            return res.status(400).json({ error: "User with this username or email already exists" });
        }

        const result = await usersCollection.insertOne(newUser);
        client.close();

        res.json({
            message: "User created successfully",
            user: result.ops[0]
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const client = new MongoClient(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db();

        const usersCollection = db.collection('users');

        const users = await usersCollection.find({}).toArray();
        client.close();

        res.json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/api/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        const client = new MongoClient(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db();

        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }], password });

        client.close();

        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        res.json({
            message: "Login successful",
            user: {
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});