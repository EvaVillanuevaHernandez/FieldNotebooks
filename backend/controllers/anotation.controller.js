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
  Anotation.findOne(id).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving one Anotations"
    })
  })
}

// Update a Anotation by the id in the request
exports.update = (req, res) => {
  // Anotation.update(id).then(data => {
  //   res.send(data);
  // }).catch(err => {
  //   res.status(500).send({
  //     message: err.message || "Some error occurred while retrieving one Anotations"
  //   })
  // })
};

// Delete a Anotation with the specified id in the request
exports.delete = (req, res) => {
  
};
