var basicAuth = require('basic-auth');

var Authentication = function(request, response, next) {

    function unauthorized(response) {
        response.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return response.send(401);
    };

    var user = basicAuth(request);

    if (!user || !user.name || !user.pass) {
        return unauthorized(response);
    };

    if (user.name === 'user1' && user.pass === 'password1') {
        return next();
    } else {
        return unauthorized(response);
    };

};

module.exports = Authentication;
