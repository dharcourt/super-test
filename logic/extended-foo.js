/**
 * @module logic/extended-foo
 */
var Foo = require("logic/foo").Foo;
/**
 * @class ExtendedFoo
 * @extends Montage
 */
exports.ExtendedFoo = Foo.specialize(/** @lends ExtendedFoo# */ {
    constructor: {
        value: function ExtendedFoo() {
            this.super();
        }
    },

    toString: {
        value: function () {
            return "Extended" + this.super();
        }
    }
});
