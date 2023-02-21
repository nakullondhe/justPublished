const router = require("express").Router();
const User = require("../models/UserSchema");

const createResponse = (res, status, message, data) => {
  res.status(status).json({ message, data });
};

// Get a user
router.route("/").get((req, res) => {
  User.findOne({ uid: req.body.uid })
    .then((user) => {
      if (user) {
        createResponse(res, 200, "User found", user);
      } else {
        createResponse(res, 404, "User not found");
      }
    })
    .catch((err) => {
      createResponse(res, 500, "Internal server error", err);
    });
});

// Create a user
router.route("/").post((req, res) => {
  const newUser = new User({
    uid: req.body.uid,
    username: req.body.username ? req.body.username : '',
    email: req.body.email,
    provider: req.body.provider,
  });
  newUser
    .save()
    .then(() => {
      createResponse(res, 200, "User created");
    })
    .catch((err) => {
      createResponse(res, 500, "Internal server error", err);
    });
});


module.exports = router;