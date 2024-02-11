import OwnerFilter from './OwnerFilter.vue'

describe('<OwnerFilter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(OwnerFilter)
  })
})