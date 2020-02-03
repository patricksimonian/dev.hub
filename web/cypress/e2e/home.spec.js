describe('Homepage', () => {
  it('loads', () => {
    cy.visit('/');
    cy.findByTestId('layout.header');
  });
});