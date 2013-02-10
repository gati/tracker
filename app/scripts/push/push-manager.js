Tracker.push = (function(exports) {
  
  var pushEngine;
  var channels = {};

  initiateSubscriptions = function(initialChannels) {
    initialChannels.forEach(function(channel) {
      channels[channel] = pushEngine.subscribe(channel);
    });
  };

  exports.start = function(settings) {
    pushEngine = new Pusher(settings.appKey);
    initiateSubscriptions(settings.channels);
  };

  exports.bindEvent = function(channel, evt, callback) {
    if(!channels[channel] || !evt || !callback) {
      return false;
    }

    console.log("binding "+channel+" : "+evt);

    channels[channel].bind(evt, callback);
  };

  exports.channels = channels;
  return exports;
})(Tracker.push || {});