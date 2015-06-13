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
            return new ExtendedFoo().toRope();
        }
    },

    result2: {
        get: function () {
            return ExtendedFoo.prototype.toString.call(new ExtendedBar());
        }
    },

    result3: {
        get: function () {
            return ExtendedFoo.prototype.toCord.call(new ExtendedBar());
        }
    },

    result4: {
        get: function () {
            var fooString = new ExtendedFoo().toString();
            ExtendedFoo.prototype.toString = function () {
            }
        }
    }
});
