var helpers = require('strong-pubsub-test');
var getPort = helpers.getFreePort;
var defineClientTests = helpers.defineClientTests;
var usingMosquitto = helpers.usingMosquitto;
var Client = require('strong-pubsub');
var Adapter = require('../'); // strong-pubsub-mqtt

describe('MQTT', function () {
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

  defineClientTests(Client, Adapter);
});
