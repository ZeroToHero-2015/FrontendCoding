hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);
