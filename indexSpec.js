"use strict";
let webdriver = require('selenium-webdriver');
let client = new webdriver.Builder().withCapabilities({
  'browserName': 'chrome'
}).build();
let chai = require('chai');
let expect = chai.expect;

describe('from Homepage', function () {
  let url = 'http://localhost:8000';

  beforeEach(function(done) {
    client.get(url).then(function() {
      done();
    })
  })
  after(function(done) {
    client.quit().then(function() {
      done();
    })
  })

  it('returns the title of the page', function (done ) {
    client.getTitle().then(function(title) {
      expect(title).to.equal("Browser Testing");
      done();
    })
  })
  it('returns the header 1 test of the page', function (done) {
    client.findElement(webdriver.By.id('header')).getText()
    .then(function(text) {
      expect(text).to.equal('Hello!')
      done();
    })
  })
})
