import { render } from '@testing-library/react'
import { UIFooter } from '@components/UI/Footer/UIFooter'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)
describe('Given that Footer is load', () => {
  it('should be accessible', async () => {
    const { container } = render(<UIFooter />)
    expect(await axe(container)).toHaveNoViolations()
  })
  describe('When the user search the developer name', () => {
    const developerName = 'Alejandro Pascual'
    it('should find it', async () => {
      const { findByText } = render(<UIFooter />)
      await findByText(new RegExp(developerName, 'i'))
    })
  })
})
