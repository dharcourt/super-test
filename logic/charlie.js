/**
 * @module logic/charlie
 */
var Bravo = require("logic/bravo").Bravo;
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

    doIt: {
        value: function () {
            return "C" + this.super() + "C";
        }
    }
});
