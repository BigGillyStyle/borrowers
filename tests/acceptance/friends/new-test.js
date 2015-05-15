import Ember from 'ember';
import {
  module, test
}
from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: FriendsNew', {
  beforeEach: function () {
    application = startApp();
  },

  afterEach: function () {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function (assert) {
  visit('/friends/new');

  andThen(function () {
    assert.equal(currentURL(), '/friends/new');
  });
});

test('Creating a new friend', function (assert) {
  visit('/');
  click('a[href="/friends/new"]');
  andThen(function () {
    assert.equal(currentPath(), 'friends.new');
  });
  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Cash');
  fillIn('input[placeholder="email"]', 'j@cash.com');
  fillIn('input[placeholder="twitter"]', 'jcash');
  click('input[value="Save"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.show.index',
      'Redirects to friends.show after create'
    );
  });
});
