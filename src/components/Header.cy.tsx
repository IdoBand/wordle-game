import Header from "./Header";
describe('Header Component', () => {
    beforeEach(() => {
        cy.mount(<Header />);
    });
    it('options button', () => {
        cy.get('.options').should('exist')
        
    });
    
});