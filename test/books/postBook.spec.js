describe("Books API - POST /Books", () => {
  it("should add a new book to the system", async () => {
    allure.addFeature("Books API");
    allure.addStory("POST /Books");
    allure.addSeverity("critical");

    const newBook = {
      title: "New Book",
      description: "A new book description",
      pageCount: 300,
      excerpt: "An excerpt",
      publishDate: "2024-09-11T00:00:00Z",
    };

    const response = await apiClient.post("/Books", newBook);
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property("title", newBook.title);
  });
});
