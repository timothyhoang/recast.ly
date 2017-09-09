class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var handleSearch = () => { this.props.search($('.form-control').val()); };
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
