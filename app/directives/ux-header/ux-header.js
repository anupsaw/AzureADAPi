(function () {
    'use strict'
    angular.module('app')
        .controller('headerCtrl', function () {
            var vm = this;
            console.log(vm);
        })
        .directive('uxHeader', function () {

            return {
                restrict: 'E',
                template: `<header>
                            <nav class="navbar navbar-default">
                                <div class=" containe-fluid ">
                                    <div class='navbar-header'>
                                        <a href="# " class="navbar-brand ">Azure AD Graph API</a>
                                    </div>
                                    <div class="navbar-form navbar-left ">
                                        <div class='form-group'>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>`,
                controller: 'headerCtrl',
                controllerAs: 'uxHeader',
                bindToController: true,
                scope: {
                }
            }
        });

})();