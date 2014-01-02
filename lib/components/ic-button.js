+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) {
      return factory(Ember);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'));
  } else {
    root.IcButton = factory(Ember);
  }
}(this, function(Ember) {

  var IcButton = Ember.Component.extend({

    tagName: 'button',

    classNameBindings: [':ic-button', ':btn', 'isSelected', 'isSelected:active'],

    ariaRole: 'radio',

    attributeBindings: ['ariaChecked:aria-checked'],

    register: function() {
      this.get('parentView').registerButton(this)
    }.on('didInsertElement'),

    click: function() {
      this.get('parentView').send('select', this);
    },

    ariaChecked: function() {
      return this.get('isSelected') ? 'true' : 'false';
    }.property('isSelected'),

    isSelected: function() {
      return this.get('parentView.selected') === this;
    }.property('parentView.selected')
  });

  return IcButton;

});

