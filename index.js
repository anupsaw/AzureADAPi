(function () {

    'use strict';
    angular.module('app', ['ui.router', 'ngDraggable', 'AdalAngular'])
        .config(function ($httpProvider, adalAuthenticationServiceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {



            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'homeCtrl',
                    controllerAs: 'home',
                    templateUrl: './app/controllers/home/home.html',
                    requireADLogin: false,
                })
                .state('grid', {
                    url: '/grid',
                    controller: 'gridCtrl',
                    controllerAs: 'grid',
                    templateUrl: './app/controllers/grid/grid.html'
                })

            $urlRouterProvider.otherwise("/home");
            $locationProvider.html5Mode(true);
            adalAuthenticationServiceProvider.init(
                {
                    instance: 'https://login.microsoftonline.com/',
                    tenant: 'iamanupsawgmail.onmicrosoft.com',
                    clientId: '60e8b92a-3c58-4deb-8755-da92b3bb9ed7',
                    endpoints: ['https://graph.windows.net/'],
                    extraQueryParameter: 'nux=1',y
                    popUp: true,
                    //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
                },
                $httpProvider
            );
        })
        .controller('mainCtrl', function () {
            var vm = this;
        })


    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})();