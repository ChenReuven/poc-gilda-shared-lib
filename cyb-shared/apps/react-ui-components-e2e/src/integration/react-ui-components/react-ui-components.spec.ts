describe('react-ui-components: ReactUiComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactuicomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactUiComponents!');
    });
});
