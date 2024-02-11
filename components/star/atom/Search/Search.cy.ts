import Search from "./Search.vue";

describe("<Search />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Search);
  });
});
