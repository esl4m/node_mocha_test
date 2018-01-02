# node_mocha_test
Node.js and Mocha framework - app trying the mocha test-framework and chai.

# Steps to install mocha and chai
$ mkdir node_mocha
$ cd node_mocha
$ npm init
$ npm install mocha --save
$ npm install chai --save

To test your code and watch the test:
$ mocha tests --recursive --watch
or
$ ./node_modules/mocha/bin/mocha
or to test one testing file :
$ ./node_modules/mocha/bin/mocha tests/test.js
