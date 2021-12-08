const {Paciente} = require('../models');

class PacienteController{
    static async getList(req, res, next){
        try {
        const paciente = new Paciente();
        const pacientes = await paciente.get();
        res.json(pacientes);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async getOne(req, res, next){
        try{
            const paciente = new Paciente({cpf: req.params.cpf});
            await paciente.getById();
            res.json(paciente);
        } catch(err){
            next(err);
        }
    }

    static async add(req, res, next){
        try {
            const paciente = new Paciente(req.body);
            await paciente.save();
            res.end();
        } catch (err) {
            console.log(err)
            next(err);
        }
    }

    static async alter(req, res, next){
        try{
            const paciente = new Paciente({...req.body, cpf: req.params.cpf});
            await paciente.change();
            res.status(204).end();
        } catch(err){
            next(err);
        }
    }

    static async destroy(req, res, next){
        try {
            const paciente = new Paciente({cpf: req.params.cpf});
            await paciente.remove();
            res.status(204).end();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = PacienteController;