import Ember from 'ember';

var IcButton = Ember.Component.extend({
  tagName: 'button',

  classNameBindings: [':btn', 'isSelected:active'],

  ariaRole: 'radio',

  attributeBindings: ['isChecked:aria-checked'],

  didInsertElement: function() {
    this.get('parentView').register(this)
  },

  click: function() {
    this.get('parentView').send('select', this);
  },

  isChecked: function() {
    return this.get('isSelected') ? 'true' : 'false';
  }.property('isSelected'),

  isSelected: function() {
    return this.get('parentView.selected') === this;
  }.property('parentView.selected')
});

export default IcButton;
