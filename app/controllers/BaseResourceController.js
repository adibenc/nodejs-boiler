// base
const {BaseController} = require("./BaseController");

class BaseResourceController extends BaseController{
    
    constructor(){
        super()
    }

    post(req, h, ctx){
        try {
            // todo validate, proccess

            // let data = this.service.create(req.payload)
            let data = {id:1, name: "John doe"}

            return this.success(req, res, next, "Data Dibuat!", data, 201);
        } catch (error) {
            // if (error instanceof ClientError) {
            //     return this.validationFail(req, res, next, error.statusCode, error.message, null)
            // }
        
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }

    async all(req, res, next){
        try {
            // let data = this.service.all()
            let data = {id:1, name: "John doe"}
            this.baseJson(req, res, next, 200, "success", "-", data)

            // return this.success(h, "Success get all!", data);
        } catch (error) {
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }
    
    async single(req, res, next){
        try {
            const { id } = req.params;
            let data = {id}
            // let data = await this.service.single(id)
    
            return this.success(h, "Success!", data);
        } catch (error) {
            // if (error instanceof ClientError) {
            //     return this.validationFail(h, error.statusCode, error.message, null)
            // }
        
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }
    
    async update(req, res, next){
        try {
            const { id } = req.params;
            // this.validator.validate(this.schema, req.payload)
            
            // let data = await this.service.update(id, req.payload)
    
            return this.success(h, "Updated!", data);
        } catch (error) {
      
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }
    
    async delete(req, res, next){
        try {
            const { id } = req.params;
            // let data = this.service.delete(id)
    
            return this.success(h, "Deleted!", data);
        } catch (error) {
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }
}

module.exports = {
    BaseResourceController,
    brInstance(){
        return new BaseResourceController()
    }
};