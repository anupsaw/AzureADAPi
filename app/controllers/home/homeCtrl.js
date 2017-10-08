(function () {
    angular.module('app')
        .controller('homeCtrl', function ($rootScope, adalAuthenticationService, azureAD) {


            var vm = this;
            vm.login = function () {
                console.log(adalAuthenticationService.login());
            };

            $rootScope.$on('adal:loginSuccess', function (data) {
                console.log(data);
            })
            vm.logout = function () {
                adalAuthenticationService.logOut();
            };

            vm.getUser = function() {
                azureAD.getUsers();
            }
        })
})();