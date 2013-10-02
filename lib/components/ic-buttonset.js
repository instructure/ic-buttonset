import Ember from 'ember';

var IcButtonset = Ember.Component.extend({
  classNames: ['btn-group'],

  ariaRole: 'radiogroup',

  createButtons: function() {
    this.set('buttons', Ember.ArrayProxy.create({content: []}));
  }.on('init'),

  register: function(btn) {
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
    this.set('selected', btn);
  },

  onSelectedDidChange: function() {
    this.set('value', btn.get('value'));
  }.observes('selected')
});

export default IcButtonset;
