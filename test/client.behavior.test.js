// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-mqtt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
