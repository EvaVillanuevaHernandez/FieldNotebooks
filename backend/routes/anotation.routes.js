module.exports = app => {
  const anotation = require("../controllers/anotation.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Anotation
   router.post("/", upload.single('file'), anotation.create);//Llamas al método create que está en el controlador.

  // Middlewear(multer) hace que la imagen que estoy recibiendo se guarde en public/images. Luego en el controlador genera con sequalize un nuevo registro . 
  // router.post("/", anotation.create); //La comento porque ya no quiero que me cree otra tabla.

  // Retrieve all Anotations
  router.get("/", anotation.findAll);

  // Retrieve a single Anotation with id
  router.get("/:id", anotation.findOne);

  // Update a Anotation with id
  router.put("/:id",anotation.update);

  // Delete a Anotation with id
  router.delete("/:id", anotation.delete);

  app.use("/api/anotations", router);
}