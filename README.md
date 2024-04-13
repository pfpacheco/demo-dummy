# demo-dummy [![NPM version](https://badge.fury.io/js/demo-dummy.svg)](https://npmjs.org/package/demo-dummy) [![Build Status](https://travis-ci.org/pfpacheco/demo-dummy.svg?branch=master)](https://travis-ci.org/pfpacheco/demo-dummy)

> The demo dummy concept project

## Installation

```zsh
$ npm install --save demo-dummy
```

## Create .env file

#### SERVERNAME_ENV=localhost
#### SERVERPORT_ENV=3000
#### MONGODB_URI=mongodb://mongo:p7oyGer21gfNix6LMgZr@localhost:27017/web

### Run Mongo DB First

```docker-compose
docker-compose -f ./_development/compose.yaml up --build
```
#### Use `--build` only at firs time

## Build

```zsh
npm run build
```

## Run Server DEV

```zsh
npm run start:dev
```

## Run Server

```zsh
npm run start
```

## License

ISC © [Paulo Francesco Pacheco](https://github.com/pfpacheco)
