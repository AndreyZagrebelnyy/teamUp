const LevelServices = require('../services/levelServices')


exports.getAllLevel = async(req,res) => {
    try {
        const levels = await LevelServices.getAllLevels()
        res.status(200).json({message: 'success', levels})
        return
    } catch ({message}) {
        res.status(500).json({error: message})
        return
    }
}