// base
// const { Op } = require("sequelize/types");
const { cl } = require("../../util/util");
const {BaseController} = require("./BaseController");

// sequelize resource
class BaseResourceController extends BaseController{
    model

    constructor(){
        super()
    }

    setModel(model){
        this.model = model
        return this
    }

    getModel(){
        return this.model
    }

    async create(req, res, next){
        try {
            // todo validate, proccess
            // cl( req.body )

            let data = await this.getModel().create(req.body)

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
            let data = await this.getModel().findAll()
            
            return this.success(req, res, next, "Sukses!", data, 200);
        } catch (error) {
            // Server ERROR!
            console.error(error);
            return this.commonServerFail(req, res, next);
        }
    }
    
    async single(req, res, next){
        try {
            const { id } = req.params;

            let data = await this.getModel().findAll({
                where: { id:id }
            });
            data = data.length > 0 ? data[0] : {};
    
            return this.success(req, res, next, "Success!", data);
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
            
            let data = this.getModel().update(req.body, {
                where: {
                  id: id
                }
              });
    
            return this.success(req, res, next, "Updated!", data);
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
            let data = this.getModel().destroy({
                where: {
                  id: id
                }
            });
    
            return this.success(req, res, next, "Deleted!", data);
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