import Header from "./Header";
import { mount } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'

Cypress.Commands.add('mount', (component, options = {}) => {
    const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options
  
    const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>
  
    return mount(wrapped, mountOptions)
  });
  
describe('Header Component', () => {
    
    beforeEach(() => {
        cy.mount(<Header />)
    });
    it('.options button should exist, click and uncover 5 Links', () => {
        cy.get('.options').should('exist')
            .click()
            .get('.menu-Links').should('have.length', 5)
    });
    it('.dropdown menu should be visible only after clicking .options button', () => {
        cy.get('.dropdown-menu').should('not.be.visible');
        cy.get('.options').click();
        cy.get('.dropdown-menu').should('be.visible');
    
    });
    it('.modal does not exist before clicking on "How To Play"', () => {
        cy.get('.modal').should('not.exist')
    });
    // it('modal exists after clicking on "How To Play"', () => {
    //     // cy.get('.options')
    //     cy.get('.options').click()
    //     cy.get('.dropdown-menu').should('be.visible')
    //     cy.get('.dropdown-menu').children()
    //     .should('contain', 'How To Play')

        // cy.get('.dropdown-menu').children()
        //     .should('contain', 'How To Play')
        // cy.get('.options')
        //     .click()
        //     .get('.dropdown-menu')
            // .get('.menu-Links').eq(3).click()
            // .get('.modal').should('be.visible')
    // });
    
    
});