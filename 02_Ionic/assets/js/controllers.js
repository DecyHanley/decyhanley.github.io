angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('PodcastsCtrl', function($scope, Podcasts) {
  $scope.podcasts = Podcasts.all();
  $scope.remove = function(podcast) {
    Podcasts.remove(podcast);
  }
})

.controller('PodcastDetailCtrl', function($scope, $stateParams, Podcasts) {
  $scope.podcast = Podcasts.get($stateParams.podcastId);
});

.controller('AboutUsCtrl', function($scope) {})
