const { Attendance, Doctor } = require("../models");

class DoctorController {

    static async createAttendance(req, res, next){
        try {
            const attendance = new Attendance(req.body);
            await attendance.save();
            res.status(201).end();      
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next){
        try {
            const doctor = new Doctor(req.body);
            await doctor.save();
            res.status(201).end();
        } catch (error) {
            next(error);
        }
    }

    static async getList(req, res, next){
        try {
            const doctor = new Doctor();
            const doctors = doctor.get();
            res.json(doctors);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = DoctorController;