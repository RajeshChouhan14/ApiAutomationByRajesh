const { expect } = require("chai");
const { apiClient } = require("./utils");
const axiosInstance = require("../../utils/axios-instance");
const allure = require("@wdio/allure-reporter").default;
describe("Authors API - PUT /Authors/{id}", () => {
  it("should update an existing author by their ID", async () => {
    allure.addFeature("Authors API");
    allure.addStory("PUT /Authors/{id}");
    allure.addSeverity("critical");

    const authorId = 1;
    const updatedAuthor = {
      id: authorId,
      idBook: 1,
      firstName: "Jane",
      lastName: "Smith",
    };

    const response = await apiClient.put(`/Authors/${authorId}`, updatedAuthor);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property(
      "firstName",
      updatedAuthor.firstName
    );
  });
});
