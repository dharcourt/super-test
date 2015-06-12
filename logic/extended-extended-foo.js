/**
 * @module logic/extended-extended-foo
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class ExtendedExtendedFoo
 * @extends Montage
 */
exports.ExtendedExtendedFoo = Montage.specialize(/** @lends ExtendedExtendedFoo# */ {
    constructor: {
        value: function ExtendedExtendedFoo() {
            this.super();
        }
    }
});
