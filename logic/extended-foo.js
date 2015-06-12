/**
 * @module logic/extended-foo
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class ExtendedFoo
 * @extends Montage
 */
exports.ExtendedFoo = Montage.specialize(/** @lends ExtendedFoo# */ {
    constructor: {
        value: function ExtendedFoo() {
            this.super();
        }
    }
});
