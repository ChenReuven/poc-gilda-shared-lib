describe('react-ui-components: CybButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cybbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CybButton!');
    });
});
