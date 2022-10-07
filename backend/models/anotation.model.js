module.exports = (sequelize, Sequelize) => {
  const Anotation = sequelize.define("anotation", {
    name: {
      type: Sequelize.STRING
    },
    species: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Anotation;
}