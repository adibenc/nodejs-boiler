// base

class BaseController{
    
    constructor(){
        // this.baseBind()
    }

    baseBind(){
        this.baseJson = this.baseJson.bind(this);
        this.success = this.success.bind(this);
        this.userFail = this.userFail.bind(this);
        this.validationFail = this.validationFail.bind(this);
        this.serverFail = this.serverFail.bind(this);
        this.commonServerFail = this.commonServerFail.bind(this);
    }

    baseJson(req, res, next, code=200, status="success", msg="-", data = null){
        let json = {
            status: status,
            message: msg,
        }
        
        if(data){
            json.data = data
        }

        return res.status(code).send(json);
    }

    success(req, res, next, msg, data, code=200){
        return this.baseJson(req, res, next, code, "success", msg, data)
    }

    userFail(req, res, next, msg, data){
        return this.baseJson(req, res, next, 400, null, msg, data)
    }

    validationFail(req, res, next, code, msg, data){
        return this.baseJson(req, res, next, code, "fail", msg, data)
    }
    
    serverFail(req, res, next, msg, data){
        return this.baseJson(req, res, next, 500, 'fail', msg, data)
    }

    commonServerFail(req, res, next){
        return this.baseJson(req, res, next, 500, 'error', 'Maaf, terjadi kegagalan pada server kami.', null)
    }
}

module.exports = {
    BaseController,
    instance(){
        return new BaseController()
    }
};