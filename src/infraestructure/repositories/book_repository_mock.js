const BookRepositoryMock = function() {};
BookRepositoryMock.prototype.getName = async function(id_book) {
  return "Crimson Prayer";
};

book_repository_mock = new BookRepositoryMock();
module.exports.book_repository = book_repository_mock;
