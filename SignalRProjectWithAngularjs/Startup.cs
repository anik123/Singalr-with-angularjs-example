using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(SignalRProjectWithAngularjs.Startup))]
namespace SignalRProjectWithAngularjs
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HubConfiguration();
            config.EnableDetailedErrors = true;
            app.MapSignalR(config);
        }

        private void database()
        {
            GlobalHost.DependencyResolver.UseSqlServer(ConfigurationManager.ConnectionStrings[""].ConnectionString);
        }
    }
}