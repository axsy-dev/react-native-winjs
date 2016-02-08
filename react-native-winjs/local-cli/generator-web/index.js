/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 */
'use strict';

var path = require('path');
var chalk = require('chalk');
var spawn = require('child_process').spawn;
var easyfile = require('easyfile');
var packageJson = require('../../package.json');
var fs = require('fs')

function installDev(projectDir, verbose) {
  var proc = spawn('npm', [
    'install',
    verbose? '--verbose': '',
    '--save-dev',
    'webpack@' + packageJson.dependencies.webpack,
    'webpack-dev-server@' + packageJson.dependencies['webpack-dev-server'],
    'babel-loader@5.1.3',
    'json-loader@0.5.2',
    'react-hot-loader@1.2.7',
    'haste-resolver-webpack-plugin@0.1.2',
    'webpack-html-plugin@0.1.1'
  ], {stdio: 'inherit'});

  proc.on('close', function (code) {
    if (code !== 0) {
      console.error('`npm install` failed');
      return;
    } else {
      console.log(chalk.white.bold('To run your app on browser:'));
      console.log(chalk.white('   cd ' + projectDir));
      console.log(chalk.white('   react-native-winjs start'));
    }
  });
}

module.exports = function(projectDir, config) {

  var root = config.getRoot();
  var src = path.join(__dirname, 'templates/webpack.config.js');
  var dest = path.join(root, 'web/webpack.config.js');

  easyfile.copy(src, dest, {
    force: true,
    backup: true,
  });

  /* Add a default index.web.js if none exists */
  
  var indexName = 'index.web.js'
  
  if (!fs.existsSync(root + '/' + indexName))
  {
    var srcIndex = path.join(__dirname, 'templates/index.web.js');
    var destIndex = path.join(root, indexName);
    
        var data = fs.readFileSync(srcIndex, 'utf8');
        var result = data.replace(/XXReactNativeWinJsComponentXX/g, path.basename(root));
        
        fs.writeFileSync(destIndex, result, 'utf8');

      console.log(chalk.bold('Added default React Native for WinJS template ' + indexName));
  }
  else
  {
      console.log(chalk.white('Kept existing React Native for WinJS template' + indexName));
  }

  process.chdir(root);
  installDev(projectDir);
}
