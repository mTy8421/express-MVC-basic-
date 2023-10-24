const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb",
  port: 3306,
});

module.exports = {
  showAll: () => {
    const result = conn
      .promise()
      .query("SELECT * FROM users")
      .then(([result]) => result)
      .catch((err) => {
        console.log(err);
      });
    return result;
  },
  showOne: (id) => {
    const result = conn
      .promise()
      .query("SELECT * FROM users WHERE id = ?", [id])
      .then(([result]) => result)
      .catch((err) => {
        console.log(err);
      });
    return result;
  },
  deletes: (data) => {
    const result = conn
      .promise()
      .query("DELETE FROM users WHERE id = ?", [data.id])
      .then(([result]) => result)
      .catch((err) => {
        console.log(err);
      });
    return result;
  },
  update: (data) => {
    const result = conn
      .promise()
      .query("UPDATE users SET firstname = ?, lastname = ? WHERE id = ?", [
        data.firstname,
        data.lastname,
        data.id,
      ])
      .then(([result]) => result)
      .catch((err) => {
        console.log(err);
      });
    return result;
  },
  insert: (data) => {
    const result = conn
      .promise()
      .query("INSERT INTO users(id, firstname, lastname) VALUES(?, ?, ?)", [
        data.id,
        data.firstname,
        data.lastname,
      ])
      .then(([result]) => result)
      .catch((err) => {
        console.log(err);
      });
    return result;
  },
};
