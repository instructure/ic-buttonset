App = Ember.Application.create({
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

App.ApplicationController = Ember.Controller.extend({
  foo: 'bar',
  actions: {
    setFoo: function() {
      this.set('foo', 'baz');
    }
  }
});

