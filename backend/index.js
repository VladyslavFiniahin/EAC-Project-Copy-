const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

const dbFilePath = path.join(__dirname, 'db_users.json');

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});


app.post('/api/create_user', async (req, res) => {
    const newUser = {
        username: req.headers.username,
        email: req.headers.email,
        password: req.headers.password
    };

    try {
        let dbData = [];
        if (await fs.access(dbFilePath).then(() => true).catch(() => false)) {
            dbData = JSON.parse(await fs.readFile(dbFilePath));
        }
        
        const isUserExist = dbData.some(user => user.username === newUser.username);
        if (isUserExist) {
            return res.status(400).json({ error: "User with this username already exists" });
        }

        dbData.push(newUser);
        await fs.writeFile(dbFilePath, JSON.stringify(dbData, null, 2));
        res.json({
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        let dbData = [];
        if (await fs.access(dbFilePath).then(() => true).catch(() => false)) {
            dbData = JSON.parse(await fs.readFile(dbFilePath));
        }
        res.json(dbData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});