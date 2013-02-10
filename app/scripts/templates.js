Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n    <a ");
  stack1 = {};
  hashTypes = {};
  stack1 = helpers.action.call(depth0, "doSection", "section", {hash:stack1,contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data});
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = {};
  hashTypes = {};
  stack1 = helpers._triageMustache.call(depth0, "section.name", {hash:stack1,contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  data.buffer.push(escapeExpression(stack1) + "</a>\n  ");
  return buffer;}

  data.buffer.push("<h1>SXSW Shuttle Tracker</h1>\n\n<nav>\n  ");
  stack1 = {};
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "section", "in", "content", {hash:stack1,inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</nav>\n\n");
  stack1 = {};
  hashTypes = {};
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:stack1,contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});

Ember.TEMPLATES["section"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<p>");
  stack1 = {};
  hashTypes = {};
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:stack1,contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  data.buffer.push(escapeExpression(stack1) + " is so awesome</p>");
  return buffer;
});

Ember.TEMPLATES["shuttle-route"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<p>This is the shuttle route!</p>");
});