# moin.js
Moin as a Service (SaaS)

JSON-API for ~~bavarian~~ hamburgerish greeting.


[![npm status](https://nodei.co/npm/servus.js.svg?downloads=true&stars=true)](https://npmjs.org/package/servus.js)

[![Build Status](https://travis-ci.org/peerigon/servus.js.svg?branch=master)](https://travis-ci.org/peerigon/servus.js)
[![Dependency Status](https://david-dm.org/peerigon/servus.js.svg)](https://david-dm.org/peerigon/servus.js)
[![Coverage Status](https://img.shields.io/coveralls/peerigon/servus.js.svg)](https://coveralls.io/r/peerigon/servus.js?branch=master)

## Getting started

### Install

1. `git clone https://github.com/peerigon/moin.js.git`
2. `cd moin.js`

#### start

1. On you machine: `npm start`
2. With docker (fig required): `fig up`
3. With vagrant: `vagrant up`, `cd /vagrant`, `npm start` and open your browser to `192.168.50.100:9001`


### load tests

```
jmeter -n -t Servus.jmx -l log.jtl
```
