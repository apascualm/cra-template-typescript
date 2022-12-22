import { Page } from '@components/Page/Page'
import styles from './FeaturesPage.module.scss'
import { NavLink } from 'react-router-dom'

export function FeaturesPage() {
  return (
    <Page className={styles.Page}>
      <article>
        <div>
          <h1>
            Built-in features
            <small>Ready to work 🎉</small>
          </h1>
        </div>
        <ul>
          <li>
            <strong>Craco</strong>, because you need to be able to customize React with your
            requirements.
            <ul>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://craco.js.org/'>
                  Craco Site
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            <strong>Jest, Jest-Axe & Testing Library</strong>, because you know that a good test
            base is necessary for robust development. Think of TDD for your unit and implementation
            tests.
            <ul>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://jestjs.io/'>
                  Jest Site
                </a>
                .
              </li>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='github.com/nickcolley/jest-axe#readme'>
                  Jest Axe
                </a>
                , this is library for check the initial accessibility. Not have 100% of guaranties,
                but is a good start .
              </li>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://testing-library.com/'>
                  Testing Library Site
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            <strong>Cypress & Testing Library</strong>, because in your tests you only need some e2e
            tests that run as fast as possible.
            <ul>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://www.cypress.io/'>
                  Cypress Site
                </a>
                .
              </li>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://testing-library.com/'>
                  Testing Library Site
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            <strong>ESlint & Prettier</strong>, because you and your team deserve a clean and
            readable code with clear and shared rules of the game.
            <ul>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://eslint.org/'>
                  ESLint Site
                </a>
                .
              </li>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://prettier.io/'>
                  Prettier Site
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            <strong>React Router</strong>, because it is possible that most of your projects require
            a route controller (it is optional).
            <ul>
              <li>
                Learn more in{' '}
                <a rel='noreferrer' target='_blank' href='https://reactrouter.com/'>
                  React Router Site
                </a>
                .
              </li>
              <li>
                Predefined error paths (<NavLink to={'/not-found'}>Error 404</NavLink> ||{' '}
                <NavLink to={'/error500'}>Error 500</NavLink>).
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </Page>
  )
}
