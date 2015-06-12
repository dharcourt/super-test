/**
 * @module logic/bar
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Bar
 * @extends Montage
 */
exports.Bar = Montage.specialize(/** @lends Bar# */ {
    constructor: {
        value: function Bar() {
            this.super();
        }
    },

    toRope: {
        value: function () {
            return "BarRope";
        }
    },

    toString: {
        value: function () {
            return "BarString";
        }
    }
});
