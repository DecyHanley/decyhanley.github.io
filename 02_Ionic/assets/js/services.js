angular.module('starter.services', [])

.factory('podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var podcasts = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'http://www.nerdist.com/wp-content/uploads/2011/10/nerdistpodcastv2.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'http://i1.sndcdn.com/avatars-000055524562-w0m7rv-original.jpg'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'http://a3.mzstatic.com/us/r30/Podcasts5/v4/6a/a9/cc/6aa9cc95-a389-f5ad-1ab1-5ac5b8265363/mza_3638591931975247127.600x600-75.jpg'
  }];

  return {
    all: function() {
      return podcasts;
    },
    remove: function(podcast) {
      podcasts.splice(podcasts.indexOf(podcast), 1);
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
});
