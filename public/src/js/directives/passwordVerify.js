var app = angular.module('ciaDasOfertaWebApp');

app.directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.password.$viewValue;
                ctrl.$setValidity('noMatch', !noMatch);
            });
        }
    };
});
