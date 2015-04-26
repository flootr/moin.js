# moin.js
Moin as a Service (MaaS)

JSON-API for ~~bavarian~~ hamburgerish greeting.


[![npm status](https://nodei.co/npm/moin.js.svg?downloads=true&stars=true)](https://npmjs.org/package/moin.js)

[![Build Status](https://travis-ci.org/flootr/moin.js.svg)](https://travis-ci.org/flootr/moin.js)
[![Dependency Status](https://david-dm.org/flootr/moin.js.svg)](https://david-dm.org/flootr/moin.js)

## Getting started

### Install

1. `git clone https://github.com/flootr/moin.js.git`
2. `cd moin.js`

#### start

1. On you machine: `npm start`
2. With docker (fig required): `fig up`
3. With vagrant: `vagrant up`, `cd /vagrant`, `npm start` and open your browser to `192.168.50.100:9001`


### load tests

```
jmeter -n -t moin.jmx -l log.jtl
```
