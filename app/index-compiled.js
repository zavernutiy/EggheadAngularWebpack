/**
 * Created by Max on 7/28/2015.
 */
'use strict';

var angular = require('angular');

require('ng-file-upload');

var ngModule = angular.module('app', ['ngFileUpload']);

require('./directives')(ngModule);
//require('./controllers')(ngModule);

//# sourceMappingURL=index-compiled.js.map