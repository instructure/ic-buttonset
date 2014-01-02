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

    classNameBindings: ['ic-button', ':btn', 'isSelected', 'isSelected:active'],

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
      this.set('selected', btn);
    },

    onSelectedDidChange: function() {
      this.set('value', this.get('selected.value'));
    }.observes('selected')

  });

  return IcButtonset;

});


+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) { return factory(Ember); });
  } else if (typeof exports === 'object') {
    factory(require('ember'));
  } else {
    factory(Ember);
  }
}(this, function(Ember) {

Ember.TEMPLATES["components/ic-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["components/ic-buttonset"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

});
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

