import Default from './default.vue'

describe('<Default />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Default)
  })
})