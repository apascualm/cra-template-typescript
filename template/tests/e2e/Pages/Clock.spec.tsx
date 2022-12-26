describe('Given that is visited the clock page', () => {
  const url = 'http://localhost:3000/#/clock'
  describe('when the user navigate', () => {
    it('should load the page', () => {
      cy.visit(url)
    })

    it('should see the heading', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /clock/i })
    })

    it('should see the component clock', () => {
      cy.visit(url)
      cy.get('div[class*="Clock_ClockC"]').should('be.visible')
    })
  })
})
