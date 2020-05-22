describe('Form inputs', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
    })

    it('click order', () => {
      cy.get('button.order')
        .click()
    })
  

    it('can type a name', () => {
      cy.get('input[name="name"]')
        .type('Stephen Gary')
        .should('have.value', 'Stephen Gary')
    })

    it('can check toppings', () => {
      cy.get('input[name="pepperoni"]').check()
      cy.get('input[name="bacon"]').check()
      cy.get('input[name="sausage"]').check()
      cy.get('input[name="pineapple"]').check()
    })

  })

  describe('Submitting', () => {
    it('can submit', () => {
      cy.get('input[name="comments"]').type('Please put extra cheese on my pizza')
      cy.get('select[name="size"]').select('Large')
      cy.get('input[name="sausage"]').check()
      cy.get('input[name="pineapple"]').check()
      cy.get('button.submit').click()
      cy.get('.order h2').contains('Stephen Gary')
    })
})