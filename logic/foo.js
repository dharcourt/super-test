/**
 * @module logic/foo
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Foo
 * @extends Montage
 */
exports.Foo = Montage.specialize(/** @lends Foo# */ {
    constructor: {
        value: function Foo() {
            this.super();
        }
    },

    toString: {
        value: function () {
            return "Foo";
        }
    }
});
