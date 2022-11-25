# E2E Workshop

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses a simple Playwright config for E2E-Testing.

Run `yarn start` to start the application.

## Playwright E2E tests

First copy the .env.dist file with `cp .env.dist .env.local`.

Run `yarn e2e` for running the E2E tests.

If you get an error because of missing browsers, run command `npx install playwright` to install all browsers
or e.g. `npx playwright install chromium` for a single one.
