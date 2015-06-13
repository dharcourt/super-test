/**
 * @module logic/bravo
 */
var Alpha = require("logic/alpha").Alpha;
/**
 * @class Bravo
 * @extends Alpha
 */
exports.Bravo = Alpha.specialize(/** @lends Bravo# */ {
    constructor: {
        value: function Bravo() {
            this.super();
        }
    }
});
