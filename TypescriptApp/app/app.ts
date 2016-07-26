﻿module app {
    class Config {
        constructor($routeProvider: angular.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/app/posts/myView.html",
                    controller: "MyViewCtrl as vm"
                })
                .when("/edit/:id", {
                    templateUrl: "/app/posts/edit.html",
                    controller: "PostEditCtrl as vm"
                })
                .when("/add", {
                    templateUrl: "/app/posts/add.html",
                    controller: "PostAddCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = angular.module('chsakellBlogApp', ['ngRoute','kendo.directives']);
    mainApp.config(Config);
}