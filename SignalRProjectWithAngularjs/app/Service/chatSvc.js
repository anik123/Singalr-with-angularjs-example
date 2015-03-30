var app = angular.module("app");
app.factory("chatSvc", [function () {

    var notification = {
        success: "success",
        error: "error",
        wait: "wait",
        warning: "warning",
        note: "note"
    };

    var position = { "positionClass": "toast-bottom-right" };
    var service = {
        success: success,
        error: error
    };
    return service;

    function success(msg) {
        toastr.success(msg, '', position);
    }

    function error(msg) {
        toastr.error(msg, '', position);
    }

    //toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
    //toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
}]);
