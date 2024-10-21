const { v4: uuidv4 } = require('uuid');

class Task {
    constructor(title) {
        this.id = uuidv4();
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
    }
}

module.exports = Task;