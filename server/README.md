# Portfolio server

Portfolio server is an api with two routes in order to manage a stock portfolio. Portfolio server has been deployed on [Deployed]

## Decisions

- Build a server in order to do easier the way how people could call required functions
- Buy prices are being returned as a random number between 50 and 900
- Prices are not using the date parameter to get a price, It just return a price as a random number between buy price - 30 and buy price + 30
- Portfolio has a limit of ten stocks

## Improvements

- Nice to have some tests
- Nice to have validations on routes parameters
- Nice to have a jws token to manage permissions

## Tech

Technologies used for build Portfolio server:

- [Node JS]
- [Express JS]
- [Typescript]

## Installation

Install the dependencies and devDependencies.

```sh
cd server
npm install
node run dev
```

For production release:

```sh
npm run postinstall
npm run start
```

## License

MIT

[//]: # 'Links'
[node js]: https://nodejs.org/es/docs/
[express js]: http://expressjs.com/
[typescript]: https://www.typescriptlang.org/
[deployed]: https://portfolio-eddy-test.herokuapp.com
