import React, { Component }   from 'react';
import { connect }            from "react-redux";
import { bindActionCreators } from "redux";

import './Snippet.css';
import * as snippetActions from "../../actions/snippetActions";

class Snippet extends Component {
  render() {
    let tags = "";
    for(let i=0; i < this.props.tags.length; i++) {
        tags += this.props.tags[i] + ", ";
    }
    return (
        <div className="snippet" onClick={this.handleClick.bind(this)} data-snippetId={this.props.id}>
            <div>
                <h4>{this.props.title}</h4>
                <p><small>{this.props.description}</small></p>
                <p><small>Tags: <em>{tags}</em></small></p>
            </div>
        </div>
    );
  }

  handleClick(e) {
      this.props.fetchSnippetDetails(2);
      console.log(this.props);
      e.stopPropagation();
  }
}

const mapStateToProps = function(state) {
  return {
    snippetData: state.snippets.snippetData
  }
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(snippetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);