export {};

describe("admin page", () => {
  it("loads", () => {
    cy.visit("/admin");
    cy.contains("button", "Login with Netlify Identity4").should("be.visible");
  });
});
