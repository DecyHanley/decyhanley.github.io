angular.module('starter.services', [])

.factory('Podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var podcasts = [{
    id: 0,
    name: 'Better Call Saul Insider Podcast - Kelley Dixon',
    lastText: '16th Febuary 2015 - 103',
    face: 'http://a3.mzstatic.com/us/r30/Podcasts5/v4/6a/a9/cc/6aa9cc95-a389-f5ad-1ab1-5ac5b8265363/mza_3638591931975247127.600x600-75.jpg'
  }, {
    id: 1,
    name: 'Ear Biscits with Rhett and Link',
    lastText: '20th Febuary 2015 - Ep.57',
    face: 'http://i1.sndcdn.com/avatars-000055524562-w0m7rv-original.jpg'
  }, {
    id: 2,
    name: 'The Nerdist - Chris Hardwick',
    lastText: '22nd Febuary 2015',
    face: 'http://www.nerdist.com/wp-content/uploads/2011/10/nerdistpodcastv2.png'
  }];

  return {
    all: function() {
      return podcast;
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
})
