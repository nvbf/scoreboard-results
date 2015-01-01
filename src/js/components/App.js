/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  rb = require('react-bootstrap'),
  App;

App = React.createClass({
  displayName: function() {
    return 'App';
  },

  render: function() {
    return (
        <h1> Results </h1>
    )
  }
});

window.React = React;

React.render( <App />, document.body
)
;
