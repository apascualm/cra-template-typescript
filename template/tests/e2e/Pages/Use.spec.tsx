describe('Given that is visited the use page', () => {
  const url = 'http://localhost:3000/#/use'
  describe('when the user navigate', () => {
    it('should load the page', () => {
      cy.visit(url)
    })

    it('should see the heading', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /how use/i })
    })

    it('should see the start Command', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /start command/i })
    })

    it('should see the build Command', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /build command/i })
    })

    it('should see the eject Command', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /eject command/i })
    })

    it('should see the test Commands', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /test commands/i })
    })

    it('should see the format Commands', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /format commands/i })
    })
  })
})
