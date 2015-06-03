angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('PodcastsCtrl', function($scope, Podcasts) {
  $scope.podcasts = Podcasts.all();
})

.controller('PodcastDetailCtrl', function($scope, $stateParams, Podcasts) {
  $scope.podcast = Podcasts.get($stateParams.podcastId);
})

.controller('AboutUsCtrl', function($scope) {});
