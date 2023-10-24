const models = require("../models/userModels");

module.exports = {
  index: (req, res) => {
    res.json({ index: "Hello Index Users" });
  },
  showUsers: (req, res) => {
    models.showAll().then((result) => {
      res.json(result);
    });
  },
  showOneUser: (req, res) => {
    models.showOne(req.params.id).then((result) => {
      res.json(result);
    });
  },
  insertUser: (req, res) => {
    models.insert(req.body).then((result) => {
      if (result) {
        res.send("Inserted");
      }
    });
  },
  updateUser: (req, res) => {
    models.update(req.body).then((result) => {
      if (result) {
        res.send("Updated");
      }
    });
  },
  deleteUser: (req, res) => {
    models.deletes(req.body).then((result) => {
      if (result) {
        res.send("Deleted");
      }
    });
  },
};
