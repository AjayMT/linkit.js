
/* global require */

var linkit = require('./linkit.js');
var should = require('should');

var thing = {
  opts: {},
  set: function (k, v) {
    thing.opts[k] = v;
  }
};

linkit(thing)
.set('hello', 'world')
.set('abc', 'xyz')
.opts.hello.should.eql('world');

thing.opts.abc.should.eql('xyz');

thing.linkit()
.set('foo', 'bar')
.opts.foo.should.eql('bar');
