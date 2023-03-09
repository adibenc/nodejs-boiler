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

    baseJson({req, res, next, httpCode=200, code=null, success="success", msg="-", data = null}){
        let json = {
            success: success ? true : false,
            message: msg,
        }
        
        if(data){
            json.data = data
        }
        
        if(code){
            json.code = code
        }

        return res.status(httpCode).send(json);
    }

    success(req, res, next, msg="success", data, httpCode=200){
        return this.baseJson({req, res, next, httpCode, msg, data})
    }

    userFail(req, res, next, msg="Maaf ada kesalahan user", data){
        return this.baseJson({req, res, next, httpCode: 400, success: false, msg, data})
    }

    validationFail(req, res, next, httpCode, msg, data){
        return this.baseJson(req, res, next, httpCode, false, msg, data)
    }
    
    serverFail(req, res, next, msg, data){
        return this.baseJson({req, res, next, httpCode: 500, success: false, msg, data})
    }

    commonServerFail(req, res, next){
        return this.baseJson({req, res, next, httpCode: 500, success: false, msg: 'Maaf, terjadi kegagalan pada server kami.', data: {}})
    }

	forbidden(req, res, next, msg){
        return this.baseJson({req, res, next, httpCode: 403, success: false, msg: msg, data: {}})
    }
}

module.exports = {
    BaseController,
    Controller: BaseController,
    instance(){
        return new BaseController()
    }
};