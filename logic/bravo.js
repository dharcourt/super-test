/**
 * @module logic/bravo
 */
var Alpha = require("logic/alpha").Alpha;
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

    doIt: {
        value: function () {
            return "B" + this.super() + "B";
        }
    }
});
