+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) {
      return factory(Ember);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'));
  } else {
    root.IcButtonset = factory(Ember);
  }
}(this, function(Ember) {

  var IcButtonset = Ember.Component.extend({

    classNames: ['ic-button-set', 'btn-group'],

    ariaRole: 'radiogroup',

    createButtons: function() {
      this.set('buttons', Ember.ArrayProxy.create({content: []}));
    }.on('init'),

    registerButton: function(btn) {
      this.get('buttons').pushObject(btn);
      if ((!this.get('selected') &&
          !this.get('default')) ||
          (!this.get('selected') &&
          this.get('default') &&
          this.get('default') === btn.get('value'))) {
        this.select(btn);
      }
    },

    select: function(btn) {
      this.set('value', btn.get('value'));
    },

    updateSelectedOnValueChange: function() {
      var value = this.get('value');
      var button = this.get('buttons').find(function(btn) {
        return btn.get('value') == value;
      });
      this.set('selected', button);
    }.observes('value')

  });

  return IcButtonset;

});

