const User = require('../models/user');
const bcrypt = require('bcryptjs');
const createError = require('../utils/appError');
const jwt = require('jsonwebtoken');

// User registration
exports.signup = async (req, res, next) => {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return next(new createError('User already exists', 400));
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '90d',
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        next(error);
    }
};

// User login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new createError('User not found', 404));
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(new createError('Invalid email or password', 401));
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
