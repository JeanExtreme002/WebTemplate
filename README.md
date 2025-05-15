# WebTemplate

This is a template for building frontend servers using [React.js](https://react.dev/).

## Getting Started (quick run)

The entire project has been built to run entirely on [Docker](https://www.docker.com/).

Create a `.env` from `.env.sample` and execute the command below to run the application:

```
$ make docker-run
```

Now, open the website on your browser at [localhost:3000](http://localhost:3000) — if you did not change the default settings.

## Getting Started (development)

Install the dependencies for the project — it uses [pnpm](https://pnpm.io/):

```
$ make install
```

Now, you can run the server with:

```
$ make run
```

Run `make help` to learn about more commands.

## Tests

Run commands below to test the project:
```
$ pnpm test        # Run the tests
$ pnpm test:watch  # Run the tests in watch mode
$ pnpm test:e2e    # Run the integration tests using Cypress
```

Use the following command to open Cypress:
```
$ pnpm cypress
```

## Coding Style

Run the commands below to properly format the project's code:

```
$ pnpm lint        # Run lint
$ pnpm lint:fix    # Run lint autofix
```

Check out the `package.json` to learn about more scripts.
