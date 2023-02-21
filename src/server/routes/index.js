const router = require("express").Router();
const UserRoutes = require("./UserRoutes");
const AuthRoutes = require("./AuthRoutes");

router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);
router.use('/', (req, res) => {
  res.status(200).json({success: true, message: 'Welcome to the API'});
});

module.exports = router;