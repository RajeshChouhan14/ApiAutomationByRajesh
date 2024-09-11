describe("Authors API - DELETE /Authors/{id}", () => {
  it("should delete an author by their ID", async () => {
    allure.addFeature("Authors API");
    allure.addStory("DELETE /Authors/{id}");
    allure.addSeverity("critical");

    const authorId = 1;
    const response = await apiClient.delete(`/Authors/${authorId}`);
    expect(response.status).to.equal(200);
  });
});
