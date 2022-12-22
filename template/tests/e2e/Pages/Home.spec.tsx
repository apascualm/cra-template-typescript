describe('Given that is visited the home page', () => {
  const url = 'http://localhost:3000/'
  describe('when the user navigate', () => {

    it('should load the page', () => {
      cy.visit(url)
    })

    it('should see the heading', () => {
      cy.visit(url)
      cy.findByRole('heading', {name: /fast create react/i})
    })

    it('should see the react logo', () => {
      cy.visit(url)
      cy.findByRole('img', {name: /react logo/i})
    })
  })
})
