const router = require("express").Router();

const tokensRoutes = require("./api/tokens.routes");
const usersRoutes = require("./api/users.routes");
const authRoutes = require("./api/auth.routes");
const dateRoutes = require("./api/date.routes");
const arenaRoutes = require("./api/arena.routes");
const favouriteRoutes = require("./api/favourite.routes");
const eventRoutes = require("./api/event.routes");
const sportRoutes = require("./api/sports.routes");
const profileRoutes = require("./api/profile.routes");

router.use("/auth", authRoutes);
router.use("/tokens", tokensRoutes);
router.use("/users", usersRoutes);
router.use("/arenas", arenaRoutes);
router.use("/favourites", favouriteRoutes);
router.use("/dates", dateRoutes);
router.use("/events", eventRoutes);
router.use("/sports", sportRoutes);
router.use("/profile", profileRoutes);
module.exports = router;
