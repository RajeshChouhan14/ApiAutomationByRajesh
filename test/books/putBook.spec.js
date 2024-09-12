const { expect } = require("chai");
const { apiClient } = require("./utils");
const allure = require("@wdio/allure-reporter").default;
describe("Books API - PUT /Books/{id}", () => {
  it("should update an existing book by its ID", async () => {
    allure.addFeature("Books API");
    allure.addStory("PUT /Books/{id}");
    allure.addSeverity("critical");

    const bookId = 1;
    const updatedBook = {
      id: bookId,
      title: "Updated Book",
      description: "An updated description",
      pageCount: 400,
      excerpt: "An updated excerpt",
      publishDate: "2024-09-11T00:00:00Z",
    };

    const response = await apiClient.put(`/Books/${bookId}`, updatedBook);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("title", updatedBook.title);
  });
});
