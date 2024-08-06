const router = require('express').Router()
const UserEventController = require('../../controllers/userEventController')

router.post('/',UserEventController.addToUserEvent)
router.get('/',UserEventController.getAllUserEvents)

module.exports = router