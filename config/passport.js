const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = function(passport) {
    // Google OAuth Strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Find existing user or create new one
            let user = await User.findOne({ googleID: profile.id });
            if (!user) {
                user = new User({
                    googleID: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                });
                await user.save();
            }
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }));

    // Serialize user to store in the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Deserialize user to retrieve from the session
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
};
