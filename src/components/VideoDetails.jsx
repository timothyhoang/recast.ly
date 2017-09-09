class VideoDetails extends React.Component {
  constructor(props) {
    super(props);    

    this.options = {
      key: 'AIzaSyACw-T2SrOBq1lFNkvLUAKrhOlqpJDpMmc',
      id: this.props.details.id.videoId,
      part: 'statistics'
    };
    
    this.state = {
      statistics: undefined
    };
    
    searchYouTube(this.options, ((results) => {
      this.setState({
        statistics: results[0].statistics
      });
    }), 'videos?');
  }

  render() {
    var options = {
      key: 'AIzaSyACw-T2SrOBq1lFNkvLUAKrhOlqpJDpMmc',
      id: this.props.details.id.videoId,
      part: 'statistics'
    };
    
    searchYouTube(options, ((results) => {
      if (JSON.stringify(this.state.statistics) !== JSON.stringify(results[0].statistics)) {
        this.setState({
          statistics: results[0].statistics
        });
      }
    }), 'videos?');
    
    if (this.state.statistics) {
      var views = Number(this.state.statistics.viewCount).toLocaleString('en-US');
      var likes = Number(this.state.statistics.likeCount).toLocaleString('en-US');
      var dislikes = Number(this.state.statistics.dislikeCount).toLocaleString('en-US');
      return (
        <div>
          <div className="video-list-entry-title" onClick={this.props.handleClick}>{this.props.details.snippet.title}</div>
          <div className='statistics'>
            <span>{views} Views</span>
            <span className='likes'> {likes} Likes</span> 
            <span className='dislikes'> {dislikes} Dislikes</span>
          </div>
          <div className="video-list-entry-detail">{this.props.details.snippet.description}</div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}