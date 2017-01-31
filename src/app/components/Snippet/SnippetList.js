import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Snippet from './Snippet';
import * as snippetActions from "../../actions/snippetActions";

import './SnippetList.css';

class SnippetList extends Component {
  componentWillMount() {
    this.props.fetchSnippets();
  }
  render() {
    return (
        <div className="snippet-list">
          {this.generateSnippetArray(this.props.snippetData || {})}
        </div>
    );
  }

  generateSnippetArray(data) {
    let snippetArray = [];
    let id;
    let title;
    let description;
    let tags;
    
    for (let i = 0; i < data.length; i++){
      id = data[i].id;
      title = data[i].title;
      description = data[i].display;
      tags = data[i].tags; 
      snippetArray.push(<Snippet key={id} id={id} title={title} description={description} tags={tags} />);
    }
    return snippetArray;
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

export default connect(mapStateToProps, mapDispatchToProps)(SnippetList);