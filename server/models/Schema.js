module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    author: DataTypes.STRING,
    publishedDate: DataTypes.STRING
  });
  return Book
}

