import Keyboard from "./Keyboard";

describe('Keyboard Component', () => {
    beforeEach(() => {
        cy.mount(<Keyboard />);
  
    });
    it('should have 28 buttons', () => {
        cy.get('button').should('have.length', 28);
    });
    it('Q button should exist', () => { 
        cy.get('#Q')
            .should('exist')
            .should('have.text', 'Q')
    });
    it.only('buttons className=.key --> color, background-color and trigger hover', () => { 
        cy.get('#Q')
            .should('have.css', 'background-color', 'rgb(204, 188, 188)')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            // .trigger('mouseover')
            // .should('have.css', 'background-color', 'rgb(0, 139, 139)')   
    });

    // it('"enter" button --> color, background-color and trigger hover', () => { 
    //     cy.get('#enter')
    //         .should('have.css', 'background-color', 'rgb(240, 255, 255)')
    //         .trigger('mouseover')
            
    //         .should('have.css', 'background-color', 'rgb(221, 118, 118)');
    // });

});