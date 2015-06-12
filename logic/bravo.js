/**
 * @module logic/bravo
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Bravo
 * @extends Montage
 */
exports.Bravo = Alpha.specialize(/** @lends Bravo# */ {
    constructor: {
        value: function Bravo() {
            this.super();
        }
    },

    method: {
        value: function () {
            return "B";
        }
    }
});
