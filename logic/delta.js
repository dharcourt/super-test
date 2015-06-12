/**
 * @module logic/delta
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Delta
 * @extends Montage
 */
exports.Delta = Charlie.specialize(/** @lends Delta# */ {
    constructor: {
        value: function Delta() {
            this.super();
        }
    },

    method: {
        value: function () {
            return "D";
        }
    }
});
