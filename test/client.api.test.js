// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-mqtt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
