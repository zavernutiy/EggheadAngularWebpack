export default ngModule => {
    ngModule.directive('kcdHello', () => {
        require('./kcd-hello.css');
        return {
            restrict: 'E',
            scope: {},
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;

                vm.greeting = 'Hello Webpack';
            }
        }
    });
};