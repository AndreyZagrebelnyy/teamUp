const router = require('express').Router()

const EventController = require('../../controllers/eventsController')


router.get('/',EventController.getAllEvents)
router.get('/:eventId',EventController.getOneEvent)
router.post('/',EventController.createEvents)


module.exports = router