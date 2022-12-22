import { Page } from '@components/Page/Page'
import styles from './UsePage.module.scss'
export function UsePage() {
  return (
    <Page className={styles.UsePage}>
      <article>
        <h1>
          How use
          <small>Simple 😬</small>
        </h1>
        <section>
          <h2>
            <strong>Start</strong> Command
          </h2>
          <code><span className='run'>▶</span> npm run start</code> Start the react application in a local server {'\''}http://localhost:3000/{'\''}.
        </section>
        <section>
          <h2>
            <strong>Build</strong> Command
          </h2>
          <code><span className='run'>▶</span> npm run build</code> Build the react application in build folder.
        </section>
        <section>
          <h2>
            <strong>Eject</strong> Command
          </h2>
          <code><span className='run'>▶</span> npm run eject</code>
        </section>
        <section>
          <h2>
            <strong>Test</strong> Commands
          </h2>
          <p><code><span className='run'>▶</span> npm run test</code> Run all test, including the unit tests, integration tests and e2e test</p>
          <p><code><span className='run'>▶</span> npm run test:unit</code> Run only the unit tests.</p>
          <p><code><span className='run'>▶</span> npm run test:unit:watch</code> Run only the only tests in watch mode (very useful in develop flow).</p>
          <p><code><span className='run'>▶</span> npm run test:e2e</code> Run Only the End To End tests.</p>
          <p><code><span className='run'>▶</span> npm run test:e2e:watch</code> Run Only the End To End tests open browser UI with watch mode.</p>
          <p><code><span className='run'>▶</span> npm run cy:open</code> Run the cypress server and open the browser with the UI tool.</p>
          <p><code><span className='run'>▶</span> npm run cy:run</code> Run Only the end-to-end tests explicit with cypress (Same that test:e2e).</p>
        </section>
        <section>
          <h2>
            <strong>Format</strong> Commands
          </h2>
          <p><code> <span className='run'>▶</span> npm run lint</code> Check if all the style rules pass. It`s useful for check in CI process. </p>
          <p><code> <span className='run'>▶</span> npm run lint:fix</code> Fix, if it is possible, all style rules with warning or error.</p>
          <p><code> <span className='run'>▶</span> npm run format</code> Formats the entire project according to the rules configured in Prettier.</p>
        </section>
      </article>
    </Page>
  )
}
