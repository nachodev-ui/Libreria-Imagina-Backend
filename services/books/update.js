const db = require("../../models");

async function updateBook(id, fieldsToUpdate) {
  try {
    const book = await db.books.findById(id);

    if (!book) {
      throw new Error("El libro no existe");
    }

    await book.update(fieldsToUpdate);

    return book;
  } catch (error) {
    throw new Error("Error al actualizar el libro: " + error.message);
  }
}

module.exports = {
  updateBook,
};
