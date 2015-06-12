/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    ExtendedBar = require("logic/extended-bar").ExtendedBar,
    ExtendedFoo = require("logic/extended-foo").ExtendedFoo;

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

    result1: {
        get: function () {
            return new ExtendedFoo().toString();
        }
    },

    result2: {
        get: function () {
            return ExtendedFoo.prototype.toString(Bar().toString();
        }
    }
});
