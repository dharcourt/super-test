/**
 * @module logic/bravo
 */
var Alpha = require("logic/alpha").Alpha,
    extend = function () { return "B" + this.super(); };
/**
 * @class Bravo
 * @extends Alpha
 */
exports.Bravo = Alpha.specialize(/** @lends Bravo# */ {
    constructor: {
        value: function Bravo() {
            this.super();
        }
    },

    x: {
        value: extend
    },

    y: {
        value: extend
    }
});
