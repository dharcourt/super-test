/**
 * @module logic/bar
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Bar
 * @extends Montage
 */
exports.Bar = Montage.specialize(/** @lends Bar# */ {
    constructor: {
        value: function Bar() {
            this.super();
        }
    }
});
