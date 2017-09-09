class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0,
      videos: searchYouTube(undefined, this.updateVideos.bind(this))
    };
  }
  
  onSelect(i) {
    this.setState({
      selected: i
    }); 
  }
  
  updateVideos(videos) {
    this.setState({
      videos: videos
    });
  }

  render() {
    if (this.state.videos) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search updateVideos={this.updateVideos.bind(this)} />
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
    } else {
      return (<div></div>);
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

