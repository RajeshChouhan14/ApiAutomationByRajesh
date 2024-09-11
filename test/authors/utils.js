// test/pages/books.page.js
const axiosInstance = require("../../utils/axios-instance");

class BooksPage {
  get booksApiEndpoint() {
    return "/api/v1/Books";
  }

  async getAllBooks() {
    const response = await axiosInstance.get(this.booksApiEndpoint);
    return response;
  }

  async getBookById(id) {
    const response = await axiosInstance.get(`${this.booksApiEndpoint}/${id}`);
    return response;
  }

  async createBook(bookData) {
    const response = await axiosInstance.post(this.booksApiEndpoint, bookData);
    return response;
  }

  // Other methods like updateBook, deleteBook...
}

module.exports = new BooksPage();
