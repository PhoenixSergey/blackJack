﻿using System.Web.Optimization;

namespace UserIterface
{
    public class BundleConfig
    {    
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

                        
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/History/AllGames").Include(
                      "~/Scripts/History/allGames.js"));

            bundles.Add(new ScriptBundle("~/bundles/History/GameDetails").Include(
                      "~/Scripts/History/gameDetails.js"));

            bundles.Add(new ScriptBundle("~/bundles/Game/Start").Include(
                      "~/Scripts/Game/start.js"));

            bundles.Add(new ScriptBundle("~/bundles/Game/Error").Include(
                      "~/Scripts/Game/error.js"));

            bundles.Add(new ScriptBundle("~/bundles/Game/EndGame").Include(
                      "~/Scripts/Game/endGame.js"));

            bundles.Add(new ScriptBundle("~/bundles/Game/CurrentGame").Include(
                      "~/Scripts/Game/currentGame.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Content/style.css"));

            bundles.Add(new StyleBundle("~/Content/kendo.material.min").Include(
                     "~/Content/kendo.material.min.css"));
        }
    }
}
