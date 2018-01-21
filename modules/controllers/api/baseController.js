module.exports = class Controller {
    constructor() {
    }

    okResponse(req, res, data, status = 200) {
        res.status(status).json({
            data : data,
            success : true
        });

        return true;
    }

    showValidationErrors(req , res , callback) {
        let errors = req.validationErrors();
        if(errors) {
            res.status(422).json({
                message : errors.map(error => {
                    return {
                        'field' : error.param,
                        'message' : error.msg
                    }
                }),
                success : false
            });
            return true;
        }
        return false
    }


    escapeAndTrim(req , items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();            
        });
    }
};