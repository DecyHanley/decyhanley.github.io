angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Podcast 001',
    lastText: 'Hello World',
    face: 'http://www.berksarl.org/wp-content/uploads/2013/10/podcast.jpg'
  }, {
    id: 1,
    name: 'Podcast 152',
    lastText: 'They Talk about Podcast Apps',
    face: 'http://www.berksarl.org/wp-content/uploads/2013/10/podcast.jpg'
  }, {
    id: 2,
    name: 'Podcast 005',
    lastText: 'We\'re new don\'t be hating',
    face: 'http://www.berksarl.org/wp-content/uploads/2013/10/podcast.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})
