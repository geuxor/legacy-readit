module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    google_id: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    publishedDate: DataTypes.STRING
  });
  return Book
}

