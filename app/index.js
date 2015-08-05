/**
 * Created by Max on 7/28/2015.
 */
const angular = require('angular');

require('ng-file-upload');

const ngModule = angular.module('app', ['ngFileUpload']);

require('./directives')(ngModule);
//require('./controllers')(ngModule);