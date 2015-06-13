/**
 * @module logic/charlie
 */
var Bravo = require("logic/bravo").Bravo;
/**
 * @class Charlie
 * @extends Bravo
 */
exports.Charlie = Bravo.specialize(/** @lends Charlie# */ {
    constructor: {
        value: function Charlie() {
            this.super();
        }
    }
});
