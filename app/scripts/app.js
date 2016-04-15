'use strict';

/**
 * @ngdoc overview
 * @name eventifyApp
 * @description
 * # eventifyApp
 *
 * Main module of the application.
 */
angular
    .module('eventifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'satellizer',
    'ngDisableScroll'
  ])
    .config(function ($routeProvider, uiGmapGoogleMapApiProvider, $httpProvider, $authProvider, $sceDelegateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/newEvent', {
                templateUrl: 'views/newevent.html',
                controller: 'NeweventCtrl',
                controllerAs: 'newEvent'
            })
            .when('/createAccount', {
                templateUrl: 'views/createaccount.html',
                controller: 'CreateaccountCtrl',
                controllerAs: 'createAccount'
            })
            .when('/userProfile', {
                templateUrl: 'views/userprofile.html',
                controller: 'UserprofileCtrl',
                controllerAs: 'userProfile'
            })
            .when('/event/:linkID', {
                templateUrl: 'views/event.html',
                controller: 'EventCtrl',
                controllerAs: 'event'
            })
            .when('/logIn', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'logIn'
            })
            .when('/overview', {
                templateUrl: 'views/overview.html',
                controller: 'OverviewCtrl',
                controllerAs: 'overview'
            })
            .when('/editevent/:linkID', {
                templateUrl: 'views/newevent.html',
                controller: 'EditeventCtrl',
                controllerAs: 'editevent'
            })
            .otherwise({
                redirectTo: '/'
            });

        $authProvider.facebook({
            clientId: '1734910026796308'
        });

        $authProvider.google({
            clientId: 'Google Client ID'
        });

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization,places'
        });

        $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://embed.spotify.com/**'
        ]);

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common.Accept = 'application/json';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

    });