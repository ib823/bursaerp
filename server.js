const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // Built-in crypto module
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Allowed email domains (for example, bursa.com)
const ALLOWED_DOMAINS = ['bursa.com'];

// Store pass keys with expiration times (in-memory store)
const passKeyStore = new Map();

// Nodemailer setup (configure your email provider)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP service provider
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Rate limiting to prevent abuse of the register endpoint
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests, please try again later.'
});

// Apply rate limiting middleware to the register route
app.use('/register', limiter);

// Helper function to validate email domain
const validateEmailDomain = (email) => {
  const domain = email.split('@')[1];
  return ALLOWED_DOMAINS.includes(domain);
};

// Function to generate 5-digit pass key
const generatePassKey = (email) => {
  const domain = email.split('@')[1];
  const hash = crypto.createHmac('sha256', domain) // Using domain as key
                     .update(email)                // Encrypt the email
                     .digest('hex');                // Get hexadecimal string

  const numericalPassKey = parseInt(hash.slice(0, 5), 16).toString().slice(0, 5); // Convert to numerical
  return numericalPassKey;
};

// Route to register user and send pass key
app.post('/register', (req, res) => {
  const { email, designation } = req.body;

  // Validate email domain
  if (!validateEmailDomain(email)) {
    return res.status(400).json({ message: 'Invalid email domain' });
  }

  // Generate a 5-digit pass key
  const passKey = generatePassKey(email);

  // Set pass key expiration (valid for 15 minutes)
  const expirationTime = Date.now() + 15 * 60 * 1000; // 15 minutes from now
  passKeyStore.set(email, { passKey, expirationTime });

  // Send email with the pass key
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your Pass Key for Access',
    text: `Hello, \n\nYour 5-digit pass key is: ${passKey}\n\nUse this to access the system.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Pass key sent successfully to your email' });
  });
});

// Route to verify the pass key entered by the user
app.post('/verify-passkey', (req, res) => {
  const { email, passKey } = req.body;

  // Retrieve the stored pass key and expiration time
  const storedData = passKeyStore.get(email);

  if (!storedData) {
    return res.status(401).json({ message: 'Pass key not found or expired' });
  }

  const { passKey: storedPassKey, expirationTime } = storedData;

  // Check if pass key has expired
  if (Date.now() > expirationTime) {
    passKeyStore.delete(email); // Remove expired pass key
    return res.status(401).json({ message: 'Pass key has expired' });
  }

  // Validate the pass key
  if (storedPassKey === passKey) {
    passKeyStore.delete(email); // Remove pass key after successful validation
    res.status(200).json({ message: 'Pass key is valid' });
  } else {
    res.status(401).json({ message: 'Invalid pass key' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
