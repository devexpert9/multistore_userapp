cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
        "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
        "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
        "clobbers": [
            "localforage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cmackay.plugins.googleanalytics": "1.0.4",
    "cordova.plugins.diagnostic": "5.0.1",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4"
}
// BOTTOM OF METADATA
});