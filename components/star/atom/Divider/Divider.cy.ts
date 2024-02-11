import Divider from './Divider.vue'

describe('<Divider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Divider)
  })
})