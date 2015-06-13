/**
 * @module logic/delta
 */
var Charlie = require("logic/charlie").Charlie,
    extend = function () { return "D" + this.super(); };

/**
 * @class Delta
 * @extends Charlie
 */
exports.Delta = Charlie.specialize(/** @lends Delta# */ {
    constructor: {
        value: function Delta() {
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
