/**
 * @module logic/alpha
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Alpha
 * @extends Montage
 */
exports.Alpha = Montage.specialize(/** @lends Alpha# */ {
    constructor: {
        value: function Alpha() {
            this.super();
        }
    },

    x: {
        value: function () {
            return "AX";
        }
    },

    y: {
        value: function () {
            return "AY";
        }
    }
});
