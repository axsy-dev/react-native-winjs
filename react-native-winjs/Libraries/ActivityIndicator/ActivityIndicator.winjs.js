/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * @providesModule ReactActivityIndicator
 */
'use strict';

import React, { PropTypes } from 'react';
import View from 'ReactView';
import StyleSheet from 'ReactStyleSheet';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

const keyframes = {
  '50%': {
    opacity: 0.3
  },
  '100%': {
    opacity: 1
  }
};

const GRAY = '#999999';

var animationName = insertKeyframesRule(keyframes);

var ActivityIndicator = React.createClass({

  propTypes: {
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
    animating: PropTypes.bool,
    /**
     * The foreground color of the spinner (default is gray).
     */
    color: PropTypes.string,
    /**
     * Size of the indicator. Small has a height of 20, large has a height of 36.
     */
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
    ]),
  },

  getDefaultProps: function() {
    return {
      animating: true,
      color: GRAY,
      size: 'small',
    };
  },

  render: function() {

    // size
    var sizeContainerClass = (this.props.size === 'large') ? "win-ring win-large" : "win-ring win-small";

    // hidden
    if (this.props.animating === false) {
      return null;
    };

    return (
        <progress /*id="progressRing"*/
                  className={sizeContainerClass}
                  style={{
                      ...this.props.style,
                      color:this.props.color,
                      }}>
        </progress>
   );
  }
});

var styles = StyleSheet.create({
  container: {
    position: 'relative',
    fontSize: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeSmallContainer: {
    width: 20,
    height: 20,
  },
  sizeLargeContainer: {
    width: 36,
    height: 36,
  },
  sizeSmallLine: {
    width: 2,
    height: 5,
    borderRadius: 2
  },
  sizeLargeLine: {
    width: 3,
    height: 9,
    borderRadius: 3
  }
});

module.exports = ActivityIndicator;
