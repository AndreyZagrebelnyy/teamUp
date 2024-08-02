const {Event, Arena} = require('../db/models')

class EventServices {
    async getAllEvents() {
        return Event.findAll()
    }
}

module.exports = new EventServices()