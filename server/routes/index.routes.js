const router = require('express').Router();

const arenaRoutes = require('./api/arena.routes')

router.use('/arenas', arenaRoutes);

module.exports = router;