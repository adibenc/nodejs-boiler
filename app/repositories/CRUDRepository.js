// base

const BaseRepository = require("./BaseRepository");

class CRUDRepository extends BaseRepository {
    cacheExpired = 300; // 6*50 = 5 minutes in seconds
    mainTable = "users"; // 6*50 = 5 minutes in seconds

    async create(data){
        return await this.getModel().create(data)
    }

    async all(){
        let data = await this.getModel().findAll()

        return data
    }
    
    async single(id){
        let data = await this.getModel().findAll({
            where: { id:id }
        });
        data = data.length > 0 ? data[0] : {};

        return data
    }
    
    async update(id){
        let data = this.getModel().update(req.body, {
            where: {
              id: id
            }
        });

        return data
    }
    
    async delete(req, res, next){
        let data = this.getModel().destroy({
            where: {
              id: id
            }
        });

        return data
    }
}

module.exports = CRUDRepository