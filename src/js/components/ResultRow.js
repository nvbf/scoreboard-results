/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  ResultRow;

ResultRow = React.createClass({
  displayName: function() {
    return 'ResultRow';
  },

  render: function() {
    var hometeam = this.props.match.hometeam;
    var awayteam = this.props.match.awayteam;
    var sets = this.props.match.sets;
    return (
      <tr>
        <td>{hometeam.player1} - {hometeam.player2}</td>
        <td>{awayteam.player1} - {awayteam.player1} </td>
        <td>{sets[0][0]} - {sets[0][1]}, {sets[1][0]} - {sets[1][1]}, {sets[2][0]} - {sets[2][1]}</td>
      </tr>
    );
  }
});

module.exports = ResultRow;
