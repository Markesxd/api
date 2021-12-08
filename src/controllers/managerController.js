const { Attendance } = require("../models");

class ManagerController {

    static async timeReport(req, res, next){
        try {
            const {initialDate, finalDate} = req.params
            const report = await Attendance.getListByTime(initialDate, finalDate);
            res.json(report);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ManagerController;