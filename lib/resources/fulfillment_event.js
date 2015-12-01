// Generated by CoffeeScript 1.10.0
(function() {
  var BaseChild, FulfillmentEvent, pluralize,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseChild = require('./base_child');

  pluralize = require('pluralize');

  FulfillmentEvent = (function(superClass) {
    extend(FulfillmentEvent, superClass);

    FulfillmentEvent.prototype.parent = '/orders';

    FulfillmentEvent.prototype.slug = {
      long: 'fulfillment_event',
      short: 'event'
    };

    FulfillmentEvent.prototype.child = '/fulfillments';

    function FulfillmentEvent(site) {
      FulfillmentEvent.__super__.constructor.call(this, site);
    }

    FulfillmentEvent.prototype.all = function(orderId, fulfillmentId, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + orderId + this.child + "/" + fulfillmentId + "/events");
      return this.resource.get(url, pluralize(this.slug.long), callback);
    };

    FulfillmentEvent.prototype.get = function(orderId, fulfillmentId, id, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + orderId + this.child + "/" + fulfillmentId + "/events/" + id);
      return this.resource.get(url, this.slug.long, callback);
    };

    FulfillmentEvent.prototype.create = function(orderId, fulfillmentId, fields, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + orderId + this.child + "/" + fulfillmentId + "/events");
      return this.resource.post(url, this.slug, fields, callback);
    };

    FulfillmentEvent.prototype.update = function(orderId, fulfillmentId, id, fields, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + orderId + this.child + "/" + fulfillmentId + "/events/" + id);
      return this.resource.put(url, this.slug, fields, callback);
    };

    FulfillmentEvent.prototype["delete"] = function(orderId, fulfillmentId, id, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + orderId + this.child + "/" + fulfillmentId + "/events/" + id);
      return this.resource["delete"](url, id, callback);
    };

    return FulfillmentEvent;

  })(BaseChild);

  module.exports = FulfillmentEvent;

}).call(this);