import MarkingTag from './MarkingTag.vue'

describe('<MarkingTag />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(MarkingTag)
  })
})