const defaultSearch = {
  key: 'AIzaSyACw-T2SrOBq1lFNkvLUAKrhOlqpJDpMmc',
  maxResults: 5,
  q: 'sloths',
  type: 'video',
  part: 'snippet',
  videoEmbeddable: true
};

var searchYouTube = (options = defaultSearch, callback, endpoint = 'search') => {
  $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/${endpoint}`,
    data: options,
    success: function(response) {
      callback(response.items);
    },
    error: function() {
      console.log('Failed fetch');
    }
  });
};

window.searchYouTube = searchYouTube;
