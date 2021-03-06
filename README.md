# Moleculer template: `project-simple`
:mortar_board: Simple Moleculer based microservices project template

## Features
- Moleculer v0.11.x with `moleculer.config.js`
- Simple project with a demo `greeter` service
- Optional API Gateway service
- Optional Transporter & Cacher
- Unit tests with [Jest](http://facebook.github.io/jest/)
- Lint with [ESLint](http://eslint.org/)
- Launch file for debugging in [VSCode](https://code.visualstudio.com/)


## Install
To install use the [moleculer-cli](https://github.com/ice-services/moleculer-cli) tool.

```bash
$ moleculer init project-simple my-project
```

## Prompts
```
$ moleculer init project-simple moleculer-demo2

Template repo: ice-services/moleculer-template-project-simple
? Add API Gateway (moleculer-web) service Yes
? Would you like communicate with other nodes? Yes
? Select a transporter NATS (recommended)
? Would you like use cache? Yes
? Select a cacher solution Memory
? Use ESLint to lint your code? Yes
? Setup unit tests with Jest? Yes
Create 'moleculer-demo2' folder...
? Would you like to run 'npm install'? Yes
```

## NPM scripts
- `npm run dev` - Start service.js in hot-reload and start REPL
- `npm lint` - Run ESLint
- `npm run ci` - Start testing in watch mode
- `npm start` - Start service.js in production mode
- `npm test` - Run tests & coverage

## License
Moleculer-cli is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact
Copyright (c) 2017 Ice-Services

[![@ice-services](https://img.shields.io/badge/github-ice--services-green.svg)](https://github.com/ice-services) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
