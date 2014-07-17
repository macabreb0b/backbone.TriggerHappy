#backbone.TriggerHappy

###Use

Include this file in your JavaScripts directory and require it in
your manifest _after_ you require backbone.js and _before_ you initialize
your Backbone app.

All events will be printed to your web console as they are triggered, 
in the following format:

<code> className (id): event </code>

Class names include:
* Model
* Collection
* View
* Router