Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['ic-button'] || (depth0 && depth0['ic-button']),options={hash:{
    'value': ("ohai"),
    'label': ("hello")
  },hashTypes:{'value': "STRING",'label': "STRING"},hashContexts:{'value': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-button", options))));
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['ic-button'] || (depth0 && depth0['ic-button']),options={hash:{
    'value': ("kthxbai"),
    'label': ("goodbye")
  },hashTypes:{'value': "STRING",'label': "STRING"},hashContexts:{'value': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-button", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"http://netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css\">\n\n");
  stack1 = (helper = helpers['ic-buttonset'] || (depth0 && depth0['ic-buttonset']),options={hash:{
    'value': ("whatchooClicked"),
    'id': ("ic-buttonset-1")
  },hashTypes:{'value': "ID",'id': "STRING"},hashContexts:{'value': depth0,'id': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-buttonset", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "whatchooClicked", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});