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
            var foo = newExtendedFoo(),
                string = foo.toString();
            ExtendedFoo.prototype.toString = ExtendedBar.prototype.toRope
            return foo.toString();
        }
    }
});
