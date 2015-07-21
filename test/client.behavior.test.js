var Client = require('strong-pubsub');
var Adapter = require('../');
var helpers = require('strong-pubsub-test');
var defineClientBehaviorTests = helpers.defineClientBehaviorTests;
var usingMosquitto = helpers.usingMosquitto;

describe('mqtt client behavior', function () {
  beforeEach(function(done) {
    var test = this;
    if (process.env.CI) {
      // CI already has mosquitto running on the default port
      test.port = 1883;
      return done();
    }
    usingMosquitto(function(err, port) {
      test.port = port;
      done(err);
    });
  });

  defineClientBehaviorTests(Client, Adapter);
});
