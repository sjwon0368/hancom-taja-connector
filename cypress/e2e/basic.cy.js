describe('Manifesting Web...', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Get Init Components...', () => {
    cy.get('h1')
    .contains('한컴타자 다이렉트링크');
  })
})
