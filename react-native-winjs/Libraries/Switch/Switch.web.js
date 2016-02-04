/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * @providesModule ReactSwitch
 */
'use strict';

import React, { PropTypes } from 'react';
import ReactWinJS from 'react-winjs';

var Switch = React.createClass({

  propTypes: {
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onValueChange: PropTypes.func,
    onTintColor: PropTypes.string,
    thumbTintColor: PropTypes.string,
    tintColor: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      onTintColor: '#00e158',
      thumbTintColor: '#fff',
      tintColor: '#fff'
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value,
      disabled: this.props.disabled,
      previousValue: this.props.value
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value,
      disabled: nextProps.disabled,
      previousValue: nextProps.value
    });
  },

  getStyles: function() {
    return {
      span: {
        cursor: 'default', // pointer will cause a grey background color on chrome
      },
      checkedSpan: {
//         borderColor: this.props.onTintColor,
//         backgroundColor: this.props.onTintColor,
      },
      uncheckedSpan: {
//        backgroundColor: this.props.tintColor,
      },
      disabledSpan: {
        opacity: 0.5,
        cursor: 'not-allowed',
        boxShadow: 'none'
      },
    };
  },

  toggleReference: function(winjstoggle) {
    this.winjstoggle = winjstoggle;
  },

  handleChange: function(e) {
    if (this.state.disabled) {
      return null;
    }

//    console.log("value = " + this.winjstoggle.winControl.checked);
    if (this.state.value !== this.winjstoggle.winControl.checked) {
      this.props.onValueChange && this.props.onValueChange.call(this, this.winjstoggle.winControl.checked);
      this.setState({
        value: this.winjstoggle.winControl.checked,
      });
    }

  },

  render: function() {
    var styles = this.getStyles();
    var spancss = this.state.value ? {...styles.span, ...styles.checkedSpan} : {...styles.span, ...styles.uncheckedSpan};
    spancss = this.state.disabled ? {...spancss, ...styles.disabledSpan} : spancss;

    return (
      <ReactWinJS.ToggleSwitch
        ref={this.toggleReference}
        style={spancss}
        checked={this.state.value}
        onChange={this.handleChange}
        disabled={this.state.disabled}
         labelOn=""
         labelOff=""
      />
    );
  }

});
module.exports = Switch;
