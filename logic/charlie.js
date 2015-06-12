/**
 * @module logic/charlie
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Charlie
 * @extends Montage
 */
exports.Charlie = Bravo.specialize(/** @lends Charlie# */ {
    constructor: {
        value: function Charlie() {
            this.super();
        }
    },

    method: {
        value: function () {
            return "C";
        }
    }
});
