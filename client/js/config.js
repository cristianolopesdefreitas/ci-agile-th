app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
    .state ('page', {
        url: '/page',
        templateUrl: 'views/common.html'
    })
    .state ('page.about', {
        url: '/about',
        templateUrl: 'views/about.html'
    })
    .state ('page.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    })
    .state('page.list',{
        url:'/list',
        templateUrl:'views/list.html',
        controller:'ShotsController'
    })
    .state('page.detail',{
        url:'/detail/:id',
        templateUrl:'views/detail.html',
        controller:'ShotsDetailController'
    });
    $urlRouterProvider.otherwise('/page/list');
}]);
