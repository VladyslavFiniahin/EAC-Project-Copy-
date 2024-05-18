const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

const mongo_uri = 'mongodb+srv://Ecz:timagandony@cluster0.1u67hr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

app.post('/api/create_user', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newUser = { username, email, password };

  try {
    const client = new MongoClient(mongo_uri);
    await client.connect();

    const db = client.db('test');
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ $or: [{ username: newUser.username }, { email: newUser.email }] });
    if (existingUser) {
      await client.close();
      return res.status(400).json({ error: "User with this username or email already exists" });
    }

    const result = await usersCollection.insertOne(newUser);
    await client.close();

    res.json({
      message: "User created successfully",
      user: { _id: result.insertedId, ...newUser }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




app.get('/api/users', async (req, res) => {
    try {
        const client = new MongoClient(mongo_uri);
        await client.connect();

        const db = client.db('test');

        const usersCollection = db.collection('users');

        const users = await usersCollection.find({}).toArray();
        await client.close();

        res.json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/api/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        const client = new MongoClient(mongo_uri);
        await client.connect();

        const db = client.db('test');

        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });

        await client.close();

        if (!user || user.password !== password) {
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

// Імпорти та підключення MongoDB залишаються тими ж самими

app.post('/api/add_friend', async (req, res) => {
    const { userId, friendId } = req.body;
  
    if (!userId || !friendId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      const client = new MongoClient(mongo_uri);
      await client.connect();
  
      const db = client.db('test');
      const usersCollection = db.collection('users');
  
      await usersCollection.updateOne(
        { _id: new MongoClient.ObjectId(userId) },
        { $addToSet: { friends: friendId } }
      );
  
      await client.close();
      res.json({ message: "Friend added successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  app.get('/api/user_friends', async (req, res) => {
    const { userId } = req.query;
  
    if (!userId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      const client = new MongoClient(mongo_uri);
      await client.connect();
  
      const db = client.db('test');
      const usersCollection = db.collection('users');
  
      const user = await usersCollection.findOne({ _id: new MongoClient.ObjectId(userId) });
      const friends = user.friends || [];
  
      await client.close();
      res.json(friends);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  