const { expect } = require("chai");
const { apiClient } = require("./utils");
const allure = require("@wdio/allure-reporter").default;

describe("Books API - GET /Books", () => {
  it("should retrieve a list of all books", async () => {
    allure.addFeature("Books API");
    allure.addStory("GET /Books");
    allure.addSeverity("critical");

    const response = await apiClient.get("/Books");
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("array");
  });
});
describe("Books API - GET /Books/{id}", () => {
  it("should retrieve details of a specific book by its ID", async () => {
    allure.addFeature("Books API");
    allure.addStory("GET /Books/{id}");
    allure.addSeverity("critical");

    const bookId = 1;
    const response = await apiClient.get(`/Books/${bookId}`);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("id", bookId);
  });

  it("should return a 404 for a non-existent book ID", async () => {
    allure.addFeature("Books API");
    allure.addStory("GET /Books/{id}");
    allure.addSeverity("normal");

    const invalidBookId = 9999;
    try {
      await apiClient.get(`/Books/${invalidBookId}`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
