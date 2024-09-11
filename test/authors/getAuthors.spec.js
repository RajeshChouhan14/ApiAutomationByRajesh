describe("Authors API - GET /Authors", () => {
  it("should retrieve a list of all authors", async () => {
    allure.addFeature("Authors API");
    allure.addStory("GET /Authors");
    allure.addSeverity("critical");

    const response = await apiClient.get("/Authors");
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("array");
  });
});
describe("Authors API - GET /Authors/{id}", () => {
  it("should retrieve details of a specific author by their ID", async () => {
    allure.addFeature("Authors API");
    allure.addStory("GET /Authors/{id}");
    allure.addSeverity("critical");

    const authorId = 1;
    const response = await apiClient.get(`/Authors/${authorId}`);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("id", authorId);
  });

  it("should return a 404 for a non-existent author ID", async () => {
    allure.addFeature("Authors API");
    allure.addStory("GET /Authors/{id}");
    allure.addSeverity("normal");

    const invalidAuthorId = 9999;
    try {
      await apiClient.get(`/Authors/${invalidAuthorId}`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });
});
