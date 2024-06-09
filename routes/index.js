const router = require('express').Router();

// Import our modular routers for notes
const notesRouter = require('./notes');

// import route
router.use('/notes', notesRouter);

// Initialize  route
module.exports = router;