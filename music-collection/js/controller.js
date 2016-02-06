var w2MusicCollection = angular.module('w2MusicCollection',[]);

w2MusicCollection.controller('w2MusicCollectionCtrl', function($scope) {
  this.doReverse = false;
  this.artists = ['David Bowie', 'Bruce Springsteen', 'Bon Jovi']

  this.albums = [{
    image: "img/bowie1.jpg",
    artist: "David Bowie",
    name: "The Man who sold the World",
    year: "1970"
  },{
    image: "img/bowie2.png",
    artist: "David Bowie",
    name: "Heroes",
    year: "1977"
  },{
    image: "img/springsteen1.JPG",
    name: "Born in the USA",
    artist: "Bruce Springsteen",
    year: "1984"
  },{
    image: "img/springsteen2.jpg",
    name: "Dancing in the Dark",
    artist: "Bruce Springsteen",
    year: "1984"
  },{
    image: "img/bonjovi1.jpg",
    name: "Livin' on a Prayer",
    artist: "Bon Jovi",
    year: "1986"
 },{
   image: "img/bonjovi2.jpg",
   name: "It's my Life",
   artist: "Bon Jovi",
   year: "2000"
 }];
});
