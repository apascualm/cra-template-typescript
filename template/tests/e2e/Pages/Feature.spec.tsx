describe('Given that is visited the feature page', () => {
  const url = 'http://localhost:3000/features'
  describe('when the user navigate', () => {
    it('should load the page', () => {
      cy.visit(url)
    })

    it('should see the heading', () => {
      cy.visit(url)
      cy.findByRole('heading', { name: /features/i })
    })

    it('should see all the features listed', () => {
      cy.visit(url)
      const features = [
        'jest',
        'craco',
        'jest-axe',
        'testing library',
        'cypress',
        'eslint',
        'prettier',
        'react router',
      ]

      features.forEach((f) => {
        cy.findByRole('article').get('ul>li').each( () => {
          cy.findAllByText(new RegExp(f, 'i')).first().should('exist')
        })
      })
    })
  })
})
