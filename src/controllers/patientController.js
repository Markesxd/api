const { Patient } = require('../models');

class PatientController {
  static async getList(req, res, next) {
    try {
      const patient = new Patient();
      const patients = await patient.get();
      res.json(patients);
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const patient = new Patient({ cpf: req.params.cpf });
      await patient.getById();
      res.json(patient);
    } catch (err) {
      next(err);
    }
  }

  static async add(req, res, next) {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.status(201).end();
    } catch (err) {
      next(err);
    }
  }

  static async alter(req, res, next) {
    try {
      const patient = new Patient({ ...req.body, cpf: req.params.cpf });
      await patient.change();
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  static async destroy(req, res, next) {
    try {
      const patient = new Patient({ cpf: req.params.cpf });
      await patient.remove();
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PatientController;
