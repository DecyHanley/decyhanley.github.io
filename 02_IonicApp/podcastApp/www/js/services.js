angular.module('starter.services', [])

.factory('Podcasts', function() {
  // Might use a resource here that returns a JSON array

  // Our data
  var podcasts = [{
    id: 0,
    name: 'Internet Box Motion Typography',
    text: 'Short Compilation - Audio from: Episode 1, 5 and 10',
    title: 'Internet Box Review',
    face: 'img/internet_box_logo.png',
    video: 'video/internet_box_motion_typography.mp4',
    review: 'review/internet_box_review.txt',
    link: 'https://www.google.ie/'
  }, {
    id: 1,
    name: 'Screen Play Motion Typography',
    text: 'Short Compilation - Audio from: Episode 1, 9 and 15',
    title: 'Screen Play Review',
    face: 'img/screen_play.jpg',
    video: 'video/screen_play_motion_typography.mp4',
    review: 'review/screen_play_review.txt',
    link: 'https://www.google.ie/'
  }, {
    id: 2,
    name: 'Irish History Podcast Motion Typography',
    text: 'Short Compilation - Audio from: Episodes The Barbarians and The Norman Invasion (Part 1 - 1156 - 1166)',
    title: 'Irish History Podcast Review',
    face: 'img/irish_history_podcast.png',
    video: 'video/irish_history_podcast_motion_typography.mp4',
    review: 'review/irish_history_podcast_review.txt',
    link: 'https://www.google.ie/'
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
