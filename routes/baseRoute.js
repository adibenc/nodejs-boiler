function routeController(ctrlFunc){
    return function(req, res, next){
        ctrlFunc(req, res, next)
    }
};

function rc(ctrlFunc){
    return routeController(ctrlFunc)
};

module.exports = {
    routeController,
    rc
}