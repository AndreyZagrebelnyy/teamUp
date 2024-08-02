const EventServices = require('../services/eventServices')


exports.getAllEvents = async(req,res) => {
    try {
        const events = await EventServices.getAllEvents()
        res.status(200).json({message: 'success', events})
        return
    } catch ({message}) {
        res.status(500).json({error: message})
        return
    }
}