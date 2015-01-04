/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  Table = require('react-bootstrap/Table'),
  ResultRow = require('./ResultRow'),
  ResultTable;

ResultTable = React.createClass({
  displayName: function() {
    return 'ResultTable';
  },


  render: function() {
    var rows = [];

    var toRow = function(match) {
      rows.push(<ResultRow match={match} key={match.id} />);
    };

    console.log(this.props);
    console.log(this.props.matches);
    console.log(this.props.matches.matches);
    this.props.matches.matches.forEach(toRow);
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Hometeam </th>
            <th>Awayteam</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </Table>
    )
  }
});

module.exports = ResultTable;
