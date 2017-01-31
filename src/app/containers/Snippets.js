import React, { Component } from 'react';
import { Col, Grid, Row }   from 'react-bootstrap';

import SnippetActions       from '../components/Snippet/SnippetActions';
import SnippetCode          from '../components/Snippet/SnippetCode';
import SnippetDetailsModal  from '../components/Snippet/SnippetDetailsModal';
import SnippetList          from '../components/Snippet/SnippetList';
import SnippetSearch        from '../components/Snippet/SnippetSearch';

class Snippets extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Row>
                <Col xs={3}>
                    <SnippetSearch />
                </Col>
                <Col xs={9}>
                    <SnippetActions />
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <SnippetList />
                </Col>
                <Col xs={9}>
                    <SnippetCode />
                </Col>
            </Row>
        </Grid>
        <SnippetDetailsModal />
      </div>
    );
  }
}

export default Snippets;
