module.exports = (app) => {
    const Nify = require('../controllers/nify.controller.js');

    // Create a new Note
    app.post('/signup', Nify.create);

    // Retrieve all Notes
    app.post('/login', Nify.findAll);

    // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    // app.delete('/notes/:noteId', notes.delete);
}