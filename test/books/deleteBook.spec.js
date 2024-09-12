const { expect } = require("chai");
const { apiClient } = require("./utils");
const allure = require("@wdio/allure-reporter").default;
describe("Books API - DELETE /Books/{id}", () => {
  it("should delete a book by its ID", async () => {
    allure.addFeature("Books API");
    allure.addStory("DELETE /Books/{id}");
    allure.addSeverity("critical");

    const bookId = 1;
    const response = await apiClient.delete(`/Books/${bookId}`);
    expect(response.status).to.equal(200);
  });
});
