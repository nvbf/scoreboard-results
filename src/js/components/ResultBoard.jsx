/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  Table = require('react-bootstrap/Table'),
  ResultBoard;

ResultBoard = React.createClass({
  displayName: function() {
    return 'ResultBoard';
  },

  render: function() {
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
          <tr>
            <td>Sindre - Kristian </td>
            <td>Magnus - Edvard </td>
            <td>21-19, 21-23, 12-14</td>
          </tr>
        </tbody>
      </Table>
    )
  }
});

module.exports = ResultBoard;
