const router = require("express").Router();

const tokensRoutes = require("./api/tokens.routes");
const usersRoutes = require("./api/users.routes");
const authRoutes = require("./api/auth.routes");
const arenaRoutes = require("./api/arena.routes");

router.use("/tokens", tokensRoutes);
router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/arenas", arenaRoutes);

module.exports = router;
