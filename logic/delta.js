/**
 * @module logic/delta
 */
var Charlie = require("logic/charlie").Charlie;
/**
 * @class Delta
 * @extends Montage
 */
exports.Delta = Charlie.specialize(/** @lends Delta# */ {
    constructor: {
        value: function Delta() {
            this.super();
        }
    }
});
