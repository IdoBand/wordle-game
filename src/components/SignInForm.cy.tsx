import SignInForm from "./SignInForm";

// useContext - > Cannot destructure property 'user' of 'useContext(...)' as it is null.


describe('SignInForm', () => {
    beforeEach(() => {
        cy.mount(<SignInForm />);
    })
    it('should display form', () => {
        cy.get('input').should('have.length', 3);
    });

    it('should have innerHTML "Submit"', () => {
        cy.get('button').should('have.text', 'Submit');
    })

    it('input should be type text', () => {
        cy.get('input').last().should('have.attr', 'type', 'text');
    })

    it('this is just a 2nd way to perform the last test', () => {
        cy.get('button').invoke('text').should('equal', 'Submit');
    })
});