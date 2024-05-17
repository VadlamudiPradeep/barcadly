const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
       
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
       
        const hashedPassword = await bcrypt.hash(password, 10);
   
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
   
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
      
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
       
        const token = jwt.sign({ userId: user.id }, 'your-secret-key',);
        res.status(200).json({ message: 'Sign in successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    signUp,
    signIn
};
