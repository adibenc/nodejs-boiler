function routeController(ctrlFunc){
    return function(req, res, next){
        ctrlFunc(req, res, next)
    }
};

function rc(ctrlFunc){
    return routeController(ctrlFunc)
};

function getController(ctrlPath){
    let {Controller} = require(ctrlPath)

    return new Controller()
}

module.exports = {
    getController,
    routeController,
    rc,
}