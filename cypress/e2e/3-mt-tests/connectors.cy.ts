/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("https://example.cypress.io/commands/location");
});
context("Connectors", () => {
  describe("test e2e", () => {
    it("works", () => {
      cy.log("first snapshot");
      cy.wrap({ foo: 4456 }).snapshot();
      cy.log("second snapshot");
      cy.wrap({ bar: 101 }).snapshot();
    });
    it("google", () => {
      // cy.origin("https://www.google.com", () => {
      //   cy.on("uncaught:exception", () => {
      //     return false;
      //   });
      // });
      // cy.visit("https://www.google.com");
      cy.matchImage();
    });
  });
});
