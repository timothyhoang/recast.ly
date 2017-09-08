class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0,
      videos: exampleVideoData
    };
  }
  
  search(query) {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: 'AIzaSyACw-T2SrOBq1lFNkvLUAKrhOlqpJDpMmc',
        maxResults: 5,
        q: query,
        type: 'video',
        part: 'snippet',
        videoEmbeddable: true
      },
      success: (response) => {
        this.setState({
          videos: response.items
        });
      },
      error: function() {
        console.log('Fail');
      }
    });
  }
  
  onSelect(i) {
    this.setState({
      selected: i
    }); 
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.selected]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} select={this.onSelect.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('app')  
);