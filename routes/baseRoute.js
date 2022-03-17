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

function resourceCrud(router, prefix, ctrlInstance){
    router.get(`/${prefix}/`, (req, res, next) => { ctrlInstance.all(req, res, next) });
    router.get(`/${prefix}/:id`, (req, res, next) => { ctrlInstance.single(req, res, next) });
    router.post(`/${prefix}/`, (req, res, next) => { ctrlInstance.create(req, res, next) });
    router.put(`/${prefix}/:id`, (req, res, next) => { ctrlInstance.update(req, res, next) });
    router.delete(`/${prefix}/:id`, (req, res, next) => { ctrlInstance.delete(req, res, next) });
}

module.exports = {
    getController,
    routeController,
    rc,
    resourceCrud,
}