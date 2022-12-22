import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { UIHeader } from '@components/UI/Header/UIHeader'
import { MemoryRouter } from 'react-router-dom'
import { windowOverride } from '@tests/components/support/WindowOverride'
import userEvent from '@testing-library/user-event'

expect.extend(toHaveNoViolations)
describe('Given that Header is load', () => {
  const component = () => (
    <MemoryRouter>
      <UIHeader />
    </MemoryRouter>
  )

  it('should be accessible', async () => {
    const { container } = render(component())
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should show the navigation header', () => {
    windowOverride('innerWidth', 900)
    const { getByRole } = render(component())
    const nav = getByRole('navigation')
    expect(nav).toBeVisible()
  })

  describe('when the screen is small', () => {
    const windowWidth = 700

    it('should not show the menu', () => {
      windowOverride('innerWidth', windowWidth)
      const { getByRole } = render(component())
      const nav = getByRole('navigation')
      expect(nav).not.toHaveClass('active')
    })

    it('should show a menu button', async () => {
      windowOverride('innerWidth', windowWidth)
      const { getByRole } = render(component())
      const button = getByRole('button', { name: /menu/i })
      expect(button).toBeVisible()
    })

    it('should show list of links', async () => {
      windowOverride('innerWidth', windowWidth)
      const { getAllByRole } = render(component())
      const links = getAllByRole('link')
      expect(links.length).toBeGreaterThanOrEqual(1)
    })

    describe('and the menu button is clicked', () => {
      it('should show the menu', () => {
        windowOverride('innerWidth', windowWidth)
        const { getByRole } = render(component())
        const button = getByRole('button', { name: /menu/i })
        userEvent.click(button)
        const nav = getByRole('navigation')
        expect(nav).toHaveClass('active')
      })
    })
  })

  describe('when the screen not is small', () => {
    const windowWidth = 900

    it('should show the nav bar for not small devices', () => {
      windowOverride('innerWidth', windowWidth)
      const { getByRole } = render(component())
      const nav = getByRole('navigation')
      expect(nav).toHaveClass('headerMenu')
      expect(nav).not.toHaveClass('mobileMenu')
    })

    it('should not show a menu button', async () => {
      windowOverride('innerWidth', windowWidth)
      const { queryByRole } = render(component())
      const button = queryByRole('button', { name: /menu/i })
      expect(button).toBeNull()
    })

    it('should show list of links', async () => {
      windowOverride('innerWidth', windowWidth)
      const { getAllByRole } = render(component())
      const links = getAllByRole('link')
      expect(links.length).toBeGreaterThanOrEqual(1)
    })
  })
})
