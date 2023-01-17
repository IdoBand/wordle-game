import Keyboard from "./Keyboard";

describe('Keyboard Component', () => {
    beforeEach(() => {
        cy.mount(<Keyboard />);
    });
    it('should have 28 buttons', () => {
        cy.get('button').should('have.length', 28);
    });

});