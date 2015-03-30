var app = angular.module("app");
app.directive("keepScroll", function () {
    var childHeight = 0;
    return {
        controller: function ($scope) {
            var element = null;

            this.setElement = function (el) {
                element = el;
            }

            this.addItem = function (item) {
                childHeight = childHeight + item.clientHeight + 1;
                element.scrollTop = element.clientHeight + childHeight; //(element.scrollTop + item.clientHeight + 1);
            };

        },
        link: function (scope, el, attr, ctrl) {
            ctrl.setElement(el[0]);
        }
    };

});

app.directive("scrollItem", function () {
    return {
        require: "^keepScroll",
        link: function (scope, el, att, scrCtrl) {
            scrCtrl.addItem(el[0]);
        }
    }
})