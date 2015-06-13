/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    Bravo = require("logic/bravo").Bravo,
    Charlie = require("logic/charlie").Charlie,
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
            var x = new Delta().toX();
            Charlie.prototype.toX = function() { return "C" + this.super(); };
            return new Delta().toX();
        }
    }
});
