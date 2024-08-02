const router = require('express').Router()

const EventController = require('../../controllers/eventsController')


router.get('/',EventController.getAllEvents)


module.exports = router