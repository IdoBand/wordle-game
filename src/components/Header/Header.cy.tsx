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
        cy.get('.dropdown-menu').should('not.exist');
        cy.get('.options').click();
        cy.get('.dropdown-menu').should('exist');
    });
    it('.modal does not exist before clicking on "How To Play"', () => {
        cy.get('.modal').should('not.exist');
        cy.get('.options').click();
        cy.get('.menu-Links').eq(3).click()
            .get('.modal').should('be.visible')
    });
    it('.modal should be closed after clicking on .close-modal button', () => {
        cy.get('.options').click();
        cy.get('.menu-Links').eq(3).click();
        cy.get('.close-modal').click();
        cy.get('.modal').should('not.exist');
    });
    it('.modal should be closed after clicking on .overlay', () => {
        cy.get('.options').click();
        cy.get('.menu-Links').eq(3).click();
        // .overlay's center is covered by modal -> have to force click().
        cy.get('.overlay').click({force: true});
        cy.get('.modal').should('not.exist');
    });
});