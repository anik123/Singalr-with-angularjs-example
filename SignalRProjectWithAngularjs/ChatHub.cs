using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRProjectWithAngularjs
{
    public class ChatHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }

        public void SendMessage(string username, string message)
        {

            Clients.All.PublishMessage(username, message);
        }

    }
}