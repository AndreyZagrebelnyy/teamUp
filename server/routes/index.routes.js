const router = require("express").Router();

const tokensRoutes = require("./api/tokens.routes");
const usersRoutes = require("./api/users.routes");
const authRoutes = require("./api/auth.routes");

router.use("/auth", authRoutes);
router.use("/tokens", tokensRoutes);
router.use("/users", usersRoutes);

module.exports = router;
