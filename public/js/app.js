angular.module('officalFudge', ['fudgeRoutes'])

.controller('mainController', function() {

	var vm = this;

	vm.bigMessage = 'Official Fudge is here.';
})

.controller('homeController', function() {

	var vm = this;

	vm.message = 'I\'d like welcome you to my page, but I won\'t'

})

.controller('aboutController', function() {

	var vm = this;

	vm.message = 'A window into my life';

})

.controller('contactController', function() {

	var vm = this;

	vm.message = 'Leave me a message and I will get back to you as soon as I can. Never.';

});