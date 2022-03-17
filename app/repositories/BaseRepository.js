// base

class BaseRepository{
    cacheExpired = 300; // 6*50 = 5 minutes in seconds
    mainTable = "users"; // 6*50 = 5 minutes in seconds

    eventService;
    code = "0";
    
    getMainDB(){
        // DB::table(this.mainTable);
        return null;
    }

    reconnectAndNoStrict(){
        // @laravel
        // DB::disconnect('mysql');
        // config().set('database.connections.mysql.strict', false);
        // DB::reconnect('mysql');
    }

    getEventService(){
		return this.eventService;
	}

	setEventService(eventService){
		this.eventService = eventService;

		return this;
	}

    baseValidate(req, rule){
        validator = Validator.make(req.all(), rule);

        if(validator.fails()){
            throw Error("todo: validation error");
        }

        return validator;
    }

    validate(type, data){
        throw Error("Unimplemented")
    }
    /*
    // common implementation
    validate(type, data){
        switch(type){
            case "create":
            break;
        }

        return this;
    }
    */

    getLegitimateUser() {
        user = this.getUser();

        if(!user){
            throw Error("User not exist! Plz call this.setUser(); first");
        }

        return user;
    }

    /**
     * Get the value of user
     */ 
    getUser() {
        return this.user;
    }

    /**
     * Set the value of user
     *
     * @return  self
     */ 
    setUser(user) {
        this.user = user;

        return this;
    }

    average(arr){
        return 0;
    }

    /**
     * Get the value of code
     */ 
    getCode() {
        return this.code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */ 
    setCode(code) {
        this.code = code;

        return this;
    }
}

module.exports = BaseRepository