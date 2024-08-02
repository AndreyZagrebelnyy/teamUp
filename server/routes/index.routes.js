const router = require("express").Router();

const tokensRoutes = require("./api/tokens.routes");
const usersRoutes = require("./api/users.routes");
const authRoutes = require("./api/auth.routes");
const arenaRoutes = require("./api/arena.routes");
const eventRoutes = require("./api/event.routes");

router.use("/auth", authRoutes);
router.use("/tokens", tokensRoutes);
router.use("/users", usersRoutes);
router.use("/arenas", arenaRoutes);
router.use("/events", eventRoutes);
module.exports = router;
