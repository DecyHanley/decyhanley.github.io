angular.module('ionicApp.services', [])

.factory('Podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var podcasts = [{
    id: 0,
    name: 'Internet Box Motion Typography',
    lastText: 'Short Compilation - Audio from: Episode 1, 5 and 10',
    face: 'assets/img/internet_box_logo.png'
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
