const db = require("../models");
const Anotation = db.fieldnotebook;
const Op = db.Sequelize.Op;

// Create and Save a new Anotation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.species || !req.body.description){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create an Anotation
  const anotation = {
    name: req.body.name,
    species: req.body.species,
    description: req.body.description,
    filename: req.file ? req.file.filename : ""
  }

  // Save Anotation in the database
  Anotation.create(anotation).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Anotation"
    })
  });
};


// Retrieve all Anotation from the database.
exports.findAll = (req, res) => {
  Anotation.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Anotations"
    })
  })
};

// Find a single Anotation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Anotation.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Anotation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Anotation with id=" + id
      });
    });
};

// Update a Anotation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  const anotation = {
    name: req.body.name,
    species: req.body.species,
    description: req.body.description,
    filename: req.file ? req.file.filename : ""
  }
  Anotation.update(anotation, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Anotation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Anotation with id=${id}. Maybe Anotation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Anotation with id=" + id
      });
    });
};

// Delete a Anotation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Anotation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Anotation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Anotation with id=${id}. Maybe Anotation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Anotation with id=" + id
        });
      });
  };

