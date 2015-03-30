var app = angular.module("app");
app.controller("chatCtrl", [
    "$scope", "chatSvc", function ($scope, chatSvc) {

        $scope.button = {
            login: "Login",
            send: "Send"
        };
        $scope.user = {
            username: '',
            message: '',
            button: $scope.button.login,
            isActive: false,

        };
        $scope.messageList = [];

        $scope.manageMessage = manageMessage;
        var chat = $.connection.chatHub;

        chat.client.publishMessage = publishMessage;

        $.connection.hub.logging = true;
        $.connection.hub.start().done(function () {

        });

        function publishMessage(name, msg) {
            var message = new messageEntity({ username: name, message: msg });
            $scope.messageList.push(message);
            $scope.user.message = "";
            $scope.$apply();
        }
        function messageEntity(val) {
            var dflt = val;
            this.username = dflt.username;
            this.message = dflt.message;
        }

        function manageMessage() {
            try {
                if ($scope.user.isActive) {
                    chat.server.sendMessage($scope.user.username, $scope.user.message);

                } else {
                    if ($scope.user.username.length > 0) {
                        $scope.user.isActive = true;
                        $scope.user.button = $scope.button.send;
                    } else {
                        chatSvc.error("Please provide a username");
                    }
                }
            } catch (e) {
                chatSvc.error(e);
            }

        }

    }
]);