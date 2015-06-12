/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    ExtendedBar = require("logic/extended-bar").ExtendedBar,
    Foo = require("logic/foo").Foo;

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
            return Foo.prototype.toString.call(new ExtendedBar());
        }
    }
});
