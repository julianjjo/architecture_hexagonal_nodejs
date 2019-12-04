const path = require('path');
const name_book_uppercase = require(path.join(__dirname, '..', 'domain', 'name_book_uppercase'));
const book_repository_mock = require(path.join(__dirname, '..', 'infraestructure', 'repositories', 'book_repository_mock'));
const book_repository_sqlite = require(path.join(__dirname, '..', 'infraestructure', 'repositories', 'book_repository_sqlite'));
async function log(functionBook, book_repository, id_book) {
  console.log(await name_book_uppercase.name_book_uppercase(book_repository.book_repository, id_book))
}
log(name_book_uppercase, book_repository_mock, id_book = 1)
