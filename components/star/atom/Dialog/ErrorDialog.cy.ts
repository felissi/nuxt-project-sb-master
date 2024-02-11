import ErrorDialog from './ErrorDialog.vue'

describe('<ErrorDialog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ErrorDialog)
  })
})