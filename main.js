// awful, awful UMD boilerplate, however, this makes it just work™ everywhere
// make sure you add dependencies in all three places (amd, cjs, global)
+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'ember',
      './lib/components/ic-button',
      './lib/components/ic-buttonset',
      './lib/templates'
    ], function(Ember, IcButton, IcButtonset) {
      return factory(Ember, IcButton, IcButtonset);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(
      require('ember'),
      require('./lib/components/ic-button'),
      require('./lib/components/ic-buttonset'),
      require('./lib/templates')
    );
  } else {
    factory(
      Ember,
      IcButton,
      IcButtonset
    );
  }
}(this, function(Ember, IcButton, IcButtonset) {

  Ember.Application.initializer({
    name: 'ic-buttonset',
    initialize: function(container, application) {
      container.register('component:ic-button', IcButton);
      container.register('component:ic-buttonset', IcButtonset);
    }
  });

  return {
    IcButton: IcButton,
    IcButtonset: IcButtonset
  };

});

