angular.module('starter.services', [])

.factory('Podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var podcasts = [{
    id: 0,
    name: 'Internet Box Motion Typography',
    lastText: 'Short Compilation - Audio from: Episode 1, 5 and 10',
    face: 'img/internet_box_logo.png',
    video: 'video/Internet_Box_Motion_Typography.mp4'
  }, {
    id: 1,
    name: 'Screen Play Motion Typography',
    lastText: 'Short Compilation - Audio from: Episode 1, 9 and 15',
    face: 'img/screen_play.jpg',
    video: 'video/Screen_Play_Motion_Typography.mp4'
  }, {
    id: 2,
    name: 'Test',
    lastText: 'Test',
    face: 'img/ionic.png'
    //video: ''
  }];

  return {
    all: function() {
      return podcasts;
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
