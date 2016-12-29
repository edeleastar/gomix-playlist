'use strict';

const songs = [
  {
    title: 'title 1',
    artist: 'artist 1'
  }, {
    title: 'title 2',
    artist: 'artist 3',
  }, {
    title: 'title 3',
    artist: 'artist 3',
  },
  {
    title: 'title 4',
    artist: 'artist 4',
  }
];

const playlist = {
  index(request, response) {
    const viewData = {
      title: 'PlayList Home',
      songs: songs,
    };
    response.render('index', viewData);
  },

  addsong(request, response) {
    songs.push(request.body);
    response.redirect('/');
  },

  deletesong(request, response) {
    songs.splice(request.params.id, 1)
    response.redirect('/');
  }
};

module.exports = playlist;
