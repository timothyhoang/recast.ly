class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.options = {
      key: 'AIzaSyACw-T2SrOBq1lFNkvLUAKrhOlqpJDpMmc',
      maxResults: 5,
      q: undefined,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true
    };
  }
  
  render() {
    var handleSearch = () => { 
      var query = $('.form-control').val();
      this.options['q'] = query;
      searchYouTube(this.options, this.props.updateVideos);
    };
    
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp= {(event) => { if (event.keyCode === 13) { handleSearch(); } }}/>
        <button className="btn hidden-sm-down" onClick={handleSearch}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
