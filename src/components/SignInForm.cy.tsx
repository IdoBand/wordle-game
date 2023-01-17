import SignInForm from "./SignInForm";

// useContext - > Cannot destructure property 'user' of 'useContext(...)' as it is null.


describe('SignInForm Component', () => {
    beforeEach(() => {
        cy.mount(<SignInForm />);
    });
    it('should display form', () => {
        cy.get('input').should('have.length', 3);
    });

    it('should have innerHTML "Submit"', () => {
        cy.get('button').should('have.text', 'Submit');
    });
    it('this is just a 2nd way to perform the last test', () => {
        cy.get('button').invoke('text').should('equal', 'Submit');
    });
    it('input should be type email', () => {
        cy.get('input').last().should('have.attr', 'type', 'email');
    });
    it('inputs should have.attr placeholder = " "', () => {
        cy.get('input').last().should('have.attr', 'placeholder', ' ');
    });

    it('clicking submit without entering required field', () => {
        cy.get("[data-test='firstName-input']")
        cy.get('button').click();
        cy.get('span').should('exist');
    });

    it('clicking submit with entering required field', () => {
        cy.get("[data-test='firstName-input']").type('Ido');
        cy.get('button').click();
        cy.get('span').should('not.exist');
    });
});