angular.module('starter.services', [])

.factory('Podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var podcasts = [{
    id: 0,
    name: 'Internet Box Motion Typography',
    lastText: 'Short Compilation - Audio from: Episode 1, 5 and 10',
    face: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10993956_800186606728830_8677960840824181840_n.jpg?oh=a5f0e8d4cb5be9b1b6945d379ff298a6&oe=55807EDC&__gda__=1431453878_e5504e08e597de95459c1c087b7be228'
  }];

  return {
    all: function() {
      return podcasts;
    },
    remove: function(podcast) {
      poscasts.splice(podcasts.indexOf(podcast), 1);
    },
    get: function(podcastId) {
      for (var i = 0; i < podcasts.length; i++) {
        if (podcasts[i].id === parseInt(podcastId)) {
          return podcasts[i];
        }
      }
      return null;
    }
  }
})
