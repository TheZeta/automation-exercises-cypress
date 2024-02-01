describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com')
    })

    it('has the correct URL', () => {
        cy.url().should('include', 'https://www.automationexercise.com')
    })

    it('only highlights the home button', () => {
        cy.contains('a', 'Home').should('exist')
        cy.get('a').contains('Home').should('have.attr', 'style', 'color: orange;')
        cy.contains('a', 'Products').should('exist')
        cy.get('a').contains('Products').should('not.have.attr', 'style', 'color: orange;')
    })

})