/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  hei;

hei = React.createClass({
  displayName: function() {
    return 'hei';
  },

  render: function() {
    return (
        <p>Hei på deg....!</p>
    )
  }
});

module.exports = hei;
