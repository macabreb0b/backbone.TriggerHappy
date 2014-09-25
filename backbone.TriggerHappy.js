var reTrigger = Backbone.Events.trigger

Backbone.Events.trigger = function(name) {
  // TRIGGER LOGGER
  // logging the class name and the name of the trigger event
  var id = this.id || 'n/a'
  console.log(this.triggerClassName + ' (' + id + "): " + name)

  return reTrigger.apply(this, arguments)
}

_.extend(Backbone.Model.prototype, Backbone.Events)
_.extend(Backbone.Collection.prototype, Backbone.Events)
_.extend(Backbone.Router.prototype, Backbone.Events)
_.extend(Backbone.View.prototype, Backbone.Events)

Backbone.Model.prototype.triggerClassName = 'Model'
Backbone.Router.prototype.triggerClassName = 'Router'
Backbone.Collection.prototype.triggerClassName = 'Collection'
Backbone.View.prototype.triggerClassName = 'View'