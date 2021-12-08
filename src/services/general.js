const db = require('../database/connection');

class General {
  constructor(object) {
    if (object) {
      const keys = Object.keys(object);
      keys.forEach((key) => this[key] = object[key]);
    }
  }

  save() {
    return new Promise((resolve, reject) => {
      const { tableName, ...data } = this;
      const sql = `INSERT INTO ${tableName} set ?`;
      return db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  remove() {
    return new Promise((resolve, reject) => {
      let sql;
      if (this.id) {
        sql = `DELETE FROM ${this.tableName} WHERE id=${this.id}`;
      } else {
        sql = `DELETE FROM ${this.tableName} WHERE cpf="${this.cpf}"`;
      }
      console.log(sql);
      db.query(sql, null, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  get() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${this.tableName}`;
      db.query(sql, null, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  getById() {
    return new Promise((resolve, reject) => {
      let sql;
      if (this.id) {
        sql = `SELECT * FROM ${this.tableName} WHERE id=${this.id}`;
      } else {
        sql = `SELECT * FROM ${this.tableName} WHERE cpf="${this.cpf}"`;
      }
      db.query(sql, null, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const result = results[0];
          const keys = Object.keys(result);
          keys.forEach((key) => this[key] = result[key]);
          resolve();
        }
      });
    });
  }

  change() {
    return new Promise((resolve, reject) => {
      const {
        tableName, id, cpf, ...data
      } = this;
      const sql = `UPDATE ${tableName} SET ? WHERE ?`;
      return db.query(sql, [data, id || cpf], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = General;
