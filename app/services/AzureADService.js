(function () {
    'use strict'
    angular.module('app')
        .factory('azureAD', function ($q, $http) {
            var azureAd = {};
            azureAd.getUsers = getUsers;

            function getUsers() {
                $http({ method: 'GET',
                url: 'https://graph.windows.net/iamanupsawgmail.onmicrosoft.com/users?api-version=1.6'

               
             })
                    .then(function (res) {
                        console.log(res)
                    }).catch(function (err) {
                        console.log(err)
                    })
            }

            return azureAd;

        })
})();