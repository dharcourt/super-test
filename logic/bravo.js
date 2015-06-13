/**
 * @module logic/bravo
 */
var Alpha = require("logic/alpha").Alpha,
    extend = function () { return this.super() + "B"; };

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

    toX: {
        value: extend
    },

    toY: {
        value: extend
    }
});
