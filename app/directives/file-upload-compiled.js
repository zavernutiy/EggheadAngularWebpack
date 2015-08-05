'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (ngModule) {
    ngModule.directive('fileUpload', function () {
        require('./file-upload.css');
        return {
            restrict: 'E',
            scope: {},
            template: require('./file-upload.html'),
            controller: function controller($scope, Upload, $timeout) {
                $scope.$watch('files', function () {
                    $scope.upload($scope.files);
                });
                $scope.$watch('file', function () {
                    $scope.upload([$scope.file]);
                });
                $scope.log = '';

                $scope.upload = function (files) {
                    if (files && files.length) {
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            Upload.upload({
                                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                                fields: {
                                    'username': $scope.username
                                },
                                file: file
                            }).progress(function (evt) {
                                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                $scope.log = 'progress: ' + progressPercentage + '% ' + evt.config.file.name + '\n' + $scope.log;
                            }).success(function (data, status, headers, config) {
                                $timeout(function () {
                                    $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                                });
                            });
                        }
                    }
                };
            }
        };
    });
};

module.exports = exports['default'];

//# sourceMappingURL=file-upload-compiled.js.map