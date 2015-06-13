/**
 * @module logic/delta
 */
var Charlie = require("logic/charlie").Charlie;

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

    toX: {
        value: function () {
            return "D" + this.super();
        }
    }
});
