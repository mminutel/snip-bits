import React, { Component }                                    from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as snippetActions from "../../actions/snippetActions";


class SnippetDetailsModal extends Component {
  componentWillMount() {
    this.props.toggleSettingsModal(false, false);
  }
  close() {
    this.props.toggleSettingsModal(false, false);
  }
  render() {
    return (
      <div>
        <Modal show={this.props.showSettingsModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Title: </ControlLabel>
              <FormControl value = {!this.props.clearSettingsModal ? this.props.snippetDetails.title : ""} type="text"/>
            </FormGroup> 
            <FormGroup>
              <ControlLabel>Description: </ControlLabel>
              <FormControl type="text" value={!this.props.clearSettingsModal ? this.props.snippetDetails.display : ""} />
            </FormGroup> 
            <FormGroup>
              <ControlLabel>Tags: </ControlLabel>
              <FormControl type="text" value={!this.props.clearSettingsModal ? this.props.snippetDetails.tags : ""}/>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    showSettingsModal: state.snippets.showSettingsModal,
    clearSettingsModal: state.snippets.clearSettingsModal,
    snippetDetails: state.snippets.snippetDetails
  }
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(snippetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetDetailsModal);