context('Actions', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit('/')
      .get('#things');
    cy.contains('thing1');
    cy.contains('thing2').click();
    cy.contains('Thing 2');
  })
})
