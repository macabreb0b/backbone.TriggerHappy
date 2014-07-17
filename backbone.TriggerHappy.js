var reTrigger = Backbone.Events.trigger

Backbone.Events.trigger = function(name) {
  // TRIGGER LOGGER
  // logging the className and the name of the trigger event
  var id = this.id || 'n/a'
  console.log(this.className + ' (' + id + "): " + name)

  return reTrigger.apply(this, arguments)
}

_.extend(Backbone.Model.prototype, Backbone.Events)
_.extend(Backbone.Collection.prototype, Backbone.Events)
_.extend(Backbone.Router.prototype, Backbone.Events)
_.extend(Backbone.View.prototype, Backbone.Events)

Backbone.Model.prototype.className = 'Model'
Backbone.Router.prototype.className = 'Router'
Backbone.Collection.prototype.className = 'Collection'
Backbone.View.prototype.className = 'View'