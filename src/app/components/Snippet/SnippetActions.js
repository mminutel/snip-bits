import React, { Component } from 'react';
import { Glyphicon }        from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as snippetActions from "../../actions/snippetActions";

class SnippetActions extends Component {
    onSettingsClick(e) {
        this.props.toggleSettingsModal(true, false);
    }

    onAddClick(e) {
        this.props.toggleSettingsModal(true, false);
        //this.props.addSnippet()
    }

    render() {
        return (
            <div>
                <Glyphicon glyph="cog" onClick={this.onSettingsClick.bind(this)} />
                <Glyphicon glyph="plus" onClick={this.onAddClick.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = function(state) {
  return {
    snippetDetails: state.snippets.snippetDetails
  }
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(snippetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetActions);