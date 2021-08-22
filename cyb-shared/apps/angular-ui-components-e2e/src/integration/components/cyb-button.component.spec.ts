describe('angular-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cybbuttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('cyb-shared-button').should('exist');
  });
});