const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/UserSchema");

const pass = (passport) => {
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const { emai } = req.body;
          const user = await User.findOne({ email });
          if (user) {
            return done(null, false, { message: "User already exists" });
          }
          const newUser = await User.create({ email, password });
          return done(null, newUser);
        } catch (error) {
          done(error);
        }
      }
    )
  ),
    passport.use(
      "login",
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email, password, done) => {
          try {
            const user = User.findOne({ email });
            if (!user) {
              return done(null, false, { message: "User not found" });
            }
            const validate = await user.isValidPassword(password);
            if (!validate) {
              return done(null, false, { message: "Password did not match" });
            }
            return done(null, user);
          } catch (error) {
            done(error);
          }
        }
      )
    );
};
