/**
 * @module logic/extended-extended-foo
 */
var ExtendedFoo = require("logic/extended-foo").ExtendedFoo;
/**
 * @class ExtendedExtendedFoo
 * @extends ExtendedFoo
 */
exports.ExtendedExtendedFoo = ExtendedFoo.specialize(/** @lends ExtendedExtendedFoo# */ {
    constructor: {
        value: function ExtendedExtendedFoo() {
            this.super();
        }
    },

    toString: {
        value: ExtendedFoo.prototype.toString
    }
});
