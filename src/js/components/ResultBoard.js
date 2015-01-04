/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  ResultTable = require('./ResultTable'),
  BootStrapCss = require('../../css/bootstrap-3.3.1.css'),
  Panel = require('react-bootstrap/Panel'),
  matches = require('./matchState'),
  ResultBoard;

ResultBoard = React.createClass({
  displayName: function() {
    return 'ResultBoard';
  },

  render: function() {
    return (
      <div>
        <Panel header="Results">
          <ResultTable matches={matches} />
        </Panel>

      </div>
    )
  }
});

module.exports = ResultBoard;
