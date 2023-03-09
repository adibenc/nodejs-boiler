const passport = require('passport');
const oauth2 = require('./oauth2');
const config = require('./config');
const expressSession = require('express-session');
const { cl } = require('../../util/util');
const MemoryStore = expressSession.MemoryStore;

function setupPassport(app){
    cl("using memory store")
    app.use(passport.initialize());
    app.use(passport.session());
    
    // Session Configuration
    app.use(expressSession({
        saveUninitialized: true,
        resave: true,
        secret: config.session.secret,
        store: new MemoryStore(),
        key: 'authorization.sid',
        cookie: { maxAge: config.session.maxAge },
    }));
    
    require('./auth');

}

module.exports = {
    setupPassport
}