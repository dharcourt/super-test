/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    Delta = require("logic/delta").Delta;

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
            return new Delta().toY();
        }
    },

    result2: {
        get: function () {
            return Bravo.prototype.toX.call(new Delta());
        }
    },

    result3: {
        get: function () {
            var foo = new ExtendedFoo(),
                string = foo.toString();
            ExtendedFoo.prototype.toString = ExtendedBar.prototype.toRope
            return foo.toString();
        }
    }
});
