/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    ExtendedBar = require("logic/extended-bar").ExtendedBar;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    result: {
        get: function () {
            var extendedBar = new ExtendedBar();
            return extendedBar.toString();
        }
    }
});
